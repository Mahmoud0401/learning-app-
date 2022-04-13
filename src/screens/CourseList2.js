import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image, Button } from 'react-native'
//import ProgressCircle from 'react-native-progress-circle'


export default class CourseList extends React.Component {
    render() {
        const { img, title, bg, onPress, onPressLearnMore } = this.props
        return (
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection: "row",
                    backgroundColor: bg,
                    padding: 20,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    alignItems: "center",
                    marginTop: 10
                }}
            >
                <Image
                    source={img}
                    style={{ width: 40, height: 40 }}
                />

                <View>
                    <Text style={{
                        color: "#345c74",
                        fontFamily: "Bold",
                        fontSize: 13,
                        paddingHorizontal: 20,
                        width: 170
                    }}>{title}</Text>
                    <Text style={{
                        color: "#f58084",
                        fontFamily: "Medium",
                        fontSize: 12,
                        paddingHorizontal: 20
                    }}>
                        10 hours, 19 lessons
                    </Text>
                </View>
                <Text style={{
                    color: "#345c74",
                    fontFamily: "Medium",
                    fontSize: 13,
                    paddingLeft: 5,
                    paddingRight: 5
                }}>
                    30%
                </Text>
                <Button style
                    onPress={onPressLearnMore}
                    title="Modify"
                    color="#F7DC6F"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Text>   </Text>

                <Button style
                    onPress={onPressLearnMore}
                    title="Delete"
                    color="#EC7063"
                    accessibilityLabel="Learn more about this purple button"
                />

            </TouchableOpacity>
        )
    }
}