import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'QLNV Công Ty TNHH VINAHOUSE',
      headerStyle: { backgroundColor: '#003399' },
      headerTintColor: '#ffffff',
      headerTitleStyle:{fontWeight:'bold',fontSize:21},
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'Xin Chi Tiết Nhân Viên',
      headerStyle: { backgroundColor: '#339900' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'Xem Danh Sách Nhân Viên',
      headerStyle: { backgroundColor: '#339900' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Cập Nhật Nhân Viên',
      headerStyle: { backgroundColor: '#339900' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Đăng Ký Nhân Viên',
      headerStyle: { backgroundColor: '#339900' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Xóa Nhân Viên',
      headerStyle: { backgroundColor: '#339900' },
      headerTintColor: '#ffffff',
    },
  },
});
export default createAppContainer(App);