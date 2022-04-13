import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

const MyComponent = () => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    return (
        <Provider>
            <Portal>
                <FAB.Group
                    open={open}
                    icon={open ? 'calendar-today' : 'plus'}
                    actions={[
                        { icon: 'plus', onPress: () => console.log('Pressed add') },
                        {
                            icon: 'person',
                            label: 'Profile',
                            onPress: () => console.log('Pressed star'),
                        },
                        {
                            icon: 'email',
                            label: 'Conversations',
                            onPress: () => console.log('Pressed email'),
                        },
                        {
                            icon: 'bell',
                            label: 'Notifications',
                            onPress: () => console.log('Pressed notifications'),
                            small: false,
                        },
                    ]}
                    onStateChange={onStateChange}


                />
            </Portal>
        </Provider>
    );
};

export default MyComponent;