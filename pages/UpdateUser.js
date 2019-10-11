import React from 'react';
import { View, YellowBox, ScrollView, KeyboardAvoidingView, Alert, } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'quanlynhanvien.db', createFromLocation : 1});
 
export default class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_user_id: '',
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
  searchUser = () => {
    const {input_user_id} =this.state;
    console.log(this.state.input_user_id);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user where id = ?',
        [input_user_id],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len',len);
          if (len > 0) {
            //console.log(results.rows.item(0).user_contact);
            this.setState({
             manv:results.rows.item(0).manv,
            });
            this.setState({
              tennv:results.rows.item(0).tennv,
             });
             this.setState({
              diachi:results.rows.item(0).diachi,
             });
             this.setState({
              phone:results.rows.item(0).phone,
             });
             this.setState({
              ngaysinh:results.rows.item(0).ngaysinh,
             });
             this.setState({
              gioitinh:results.rows.item(0).gioitinh,
             });
            this.setState({
             chucvu:results.rows.item(0).chucvu,
            });
            this.setState({
             luong:results.rows.item(0).luong,
            });
          }else{
            alert('Nhân Viên Không Được Sửa!');
            this.setState({
              manv: '',
              tennv: '',
              diachi:'',
              phone:'',
              ngaysinh:'',
              gioitinh:'',
              chucvu:'',
              luong:'',
            });
          }
        }
      );
    });
  };
  updateUser = () => {
    var that=this;
    const { input_user_id } = this.state;
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
                'UPDATE table_user set manv=?, tennv=? ,diachi=?,phone=?,ngaysinh=?,gioitinh=?,chucvu=?,luong=? where id=?',
                [manv,tennv,diachi,phone,ngaysinh,gioitinh,chucvu,luong,input_user_id],
                (tx, results) => {
                  console.log('Results', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    Alert.alert(
                      'Thành Công',
                      'Bạn đã sửa thành công!',
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
              placeholder="Mời Nhập ID cần sửa"
              style={{ padding:10 }}
              onChangeText={input_user_id => this.setState({ input_user_id })}
            />
            <Mybutton
              title="Tìm Kiếm"
              customClick={this.searchUser.bind(this)}
            />
            <Mytextinput
              placeholder="Mã Nhân Viên"
              value={this.state.manv}
              style={{ padding:10 }}
              onChangeText={manv => this.setState({ manv })}
            />
             <Mytextinput
              placeholder="Tên Nhân Viên"
              value={this.state.tennv}
              style={{ padding:10 }}
              onChangeText={tennv => this.setState({ tennv })}
            />
             <Mytextinput
              placeholder="Địa Chỉ"
              value={this.state.diachi}
              style={{ padding:10 }}
              onChangeText={diachi => this.setState({ diachi })}
            />
             <Mytextinput
              placeholder="Số Điện Thoại"
              value={this.state.phone}
              style={{ padding:10 }}
              onChangeText={phone => this.setState({ phone })}
            />
             <Mytextinput
              placeholder="Ngày Sinh"
              value={this.state.ngaysinh}
              style={{ padding:10 }}
              onChangeText={ngaysinh => this.setState({ ngaysinh })}
            />
             <Mytextinput
              placeholder="Giới Tính"
              value={this.state.gioitinh}
              style={{ padding:10 }}
              onChangeText={gioitinh => this.setState({ gioitinh })}
            />
            <Mytextinput
              placeholder="Chức Vụ"
              value={this.state.chucvu}
              onChangeText={chucvu => this.setState({chucvu })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Lương"
              value={this.state.luong}
              onChangeText={luong => this.setState({luong })}
              style={{padding:10}}
            />
            <Mybutton
              title="Cập Nhật"
              customClick={this.updateUser.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}