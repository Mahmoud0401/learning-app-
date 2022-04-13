import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Accueil from '../screens/Accueil'
import login from '../screens/login'
import roleAdmin from '../screens/roleAdmin'
import managingTeacher from '../screens/managingTeacher'
import managingEtd from '../screens/managingEtd'
import loginEns from '../screens/loginEns'
import roleEns from '../screens/roleEns'
import managingModules from '../screens/managingModules'
import loginEt from '../screens/loginEt'
import register from '../screens/register'
import Home from '../screens/Home'
import Cources from '../screens/Cources'
import Xd from '../screens/Xd'
import XD2 from '../screens/XD2'
import VideoPage from '../screens/VideoPage'
import C from '../screens/C'
import cpp from '../screens/C++'
import Python from '../screens/Python'
import css from '../screens/css'
import AE from '../screens/AE'
import html from '../screens/html'
import ReactNative from '../screens/ReactNative'
import ps from '../screens/ps'
import addMatiere from '../screens/addMatiere'
//import drawer from '../screens/drawer'
import java from '../screens/java'
import FAB from '../screens/FAB'
import cpp2 from '../screens/C++2'
import docker from '../screens/docker'
import angular from '../screens/angular'
import nodejs from '../screens/nodejs'
import videoJavaBoucles from '../screens/videoJavaBoucles'
import videoJavaConditions from '../screens/videoJavaConditions'
import videoJavaOperators from '../screens/videoJavaOperators'
import videoJavaIntroduction from '../screens/videoJavaIntroduction'
import videoNodejsFirstServer from '../screens/videoNodejsFirstServer'
import videoNodejsIntro from '../screens/videoNodejsIntro'
import videoNodejsModules from '../screens/videoNodejsModules'
import videoNodejsStreams from '../screens/videoNodejsStreams'
import videoNodejsInstallation from '../screens/videoNodejsInstallation'
import videoCboucles from '../screens/videoCboucles'
//import videoCcompiler from '../screens/videoCcompiler'
import videoCconditions from '../screens/videoCconditions'
import videoCfunctions from '../screens/videoCfunctions'
import videoCIntro from '../screens/videoCIntro'
import videoCpointer from '../screens/videoCpointer'
import videoCstrings from '../screens/videoCstrings'
import videoCvariables from '../screens/videoCvariables'

const stackNavigatorOptions = {
    headerShown: false
}
const AppNavigator = createStackNavigator({
    Accueil: { screen: Accueil },
    login: { screen: login },
    register: { screen: register },
    roleAdmin: { screen: roleAdmin },
    managingTeacher: { screen: managingTeacher },
    managingEtd: { screen: managingEtd },
    loginEns: { screen: loginEns },
    roleEns: { screen: roleEns },
    managingModules: { screen: managingModules },
    loginEt: { screen: loginEt },

    Home: { screen: Home },
    Cources: { screen: Cources },
    C: { screen: C },
    cpp: { screen: cpp },
    Python: { screen: Python },
    ReactNative: { screen: ReactNative },
    html: { screen: html },
    css: { screen: css },
    AE: { screen: AE },
    ps: { screen: ps },
    Xd: { screen: Xd },
    XD2: { screen: XD2 },
    addMatiere: { screen: addMatiere },
    //drawer: { screen: drawer },
    java: { screen: java },
    FAB: { screen: FAB },
    cpp2: { screen: cpp2 },
    docker: { screen: docker },
    angular: { screen: angular },
    nodejs: { screen: nodejs },

    VideoPage: { screen: VideoPage },
    videoJavaBoucles: { screen: videoJavaBoucles },
    videoJavaConditions: { screen: videoJavaConditions },
    videoJavaIntroduction: { screen: videoJavaIntroduction },
    videoJavaOperators: { screen: videoJavaOperators },
    videoJavaConditions: { screen: videoJavaConditions },
    videoNodejsStreams: { screen: videoNodejsStreams },
    videoNodejsFirstServer: { screen: videoNodejsFirstServer },
    videoNodejsInstallation: { screen: videoNodejsInstallation },
    videoNodejsIntro: { screen: videoNodejsIntro },
    videoNodejsModules: { screen: videoNodejsModules },
    videoCboucles: { screen: videoCboucles },
    //videoCcompiler: { screen: videoCcompiler },
    videoCconditions: { screen: videoCconditions },
    videoCfunctions: { screen: videoCfunctions },
    videoCIntro: { screen: videoCIntro },
    videoCpointer: { screen: videoCpointer },
    videoCstrings: { screen: videoCstrings },
    videoCvariables: { screen: videoCvariables }



},
    {
        initialRouteName: "Accueil",

        defaultNavigationOptions: stackNavigatorOptions
    }
)
export default createAppContainer(AppNavigator);