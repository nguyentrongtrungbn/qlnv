import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'quanlynhanvien.db', createFromLocation : 1});
 
export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      manv: '',
      tennv: '',
      diachi:'',
      phone:'',
      ngaysinh:'',
      gioitinh:'',
      chucvu:'',
      luong:'',
    };
  }
 
  register_user = () => {
    var that = this;
    const {manv} = this.state;
    const {tennv} = this.state;
    const {diachi} = this.state;
    const {phone} = this.state;
    const {ngaysinh} = this.state;
    const {gioitinh} = this.state;
    const {chucvu} = this.state;
    const {luong} = this.state;
    if(manv){
    if(tennv){
    if(diachi){
    if(phone){
    if(ngaysinh){
    if (gioitinh) {
      if (chucvu) {
        if (luong) {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO table_user (manv,tennv,diachi,phone,ngaysinh,gioitinh,chucvu,luong) VALUES (?,?,?,?,?,?,?,?)',
              [manv,tennv,diachi,phone,ngaysinh,gioitinh,chucvu,luong],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Thành Công',
                    'Bạn đã thêm thành công!',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('HomeScreen'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('Lỗi!');
                }
              }
            );
          });
        } else {
          alert('Xin mời nhập số lương!');
        }
      } else {
        alert('xin mời nhập chức vụ');
      }
    } else {
      alert('xin mời nhập giới tính');
    }
    }else{
      alert('xin mời nhập ngày sinh');
    }
  }else{
    alert('xin mời nhập số điện thoại');
  }
  }else{
    alert('xin mời nhập địa chỉ');
  }
  }else{
    alert('xin mời nhập tên nhân viên');
  }
  }else{
    alert('xin mời nhập mã nhân viên');
  }
  };
 
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Mã Nhân Viên"
              onChangeText={manv => this.setState({ manv })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Tên Nhân Viên"
              onChangeText={tennv => this.setState({tennv})}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Địa Chỉ"
              onChangeText={diachi => this.setState({diachi})}
              numberOfLines={5}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Số Điện Thoại"
              onChangeText={phone => this.setState({ phone })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Ngày Sinh"
              onChangeText={ngaysinh => this.setState({ngaysinh })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Giới Tính"
              onChangeText={gioitinh => this.setState({gioitinh})}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Chức Vụ"
              onChangeText={chucvu => this.setState({chucvu })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Lương"
              onChangeText={luong => this.setState({luong })}
              style={{ textAlignVertical: 'top',padding:10 }}
            />
            <Mybutton
              title="Đăng Ký"
              customClick={this.register_user.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}