import React from 'react';
import { Text, View, Button } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'quanlynhanvien.db', createFromLocation : 1});
 
export default class ViewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_user_id: '',
      userData: '',
    };
  }
  searchUser = () => {
    const { input_user_id } = this.state;
    console.log(this.state.input_user_id);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user where id = ?',
        [input_user_id],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            this.setState({
              userData: results.rows.item(0),
            });
          } else {
            alert('Không có nhân viên nào!');
            this.setState({
              userData: '',
            });
          }
        }
      );
    });
  };
  render() {
    return (
      <View>
        <Mytextinput
          placeholder="Nhập ID"
          onChangeText={input_user_id => this.setState({ input_user_id })}
          style={{ padding:10 }}
        />
        <Mybutton
          title="Tìm Kiếm"
          customClick={this.searchUser.bind(this)}
        />
        <View style={{ padding:10,marginLeft: 35, marginRight: 35, marginTop: 10 ,backgroundColor:'pink',borderRadius:30}}>
              <Text>ID: {this.state.userData.id}</Text>
              <Text>Mã Nhân Viên: {this.state.userData.manv}</Text>
              <Text>Tên Nhân Viên: {this.state.userData.tennv}</Text>
              <Text>Địa Chỉ: {this.state.userData.diachi}</Text>
              <Text>Số Điện Thoại: {this.state.userData.phone}</Text>
              <Text>Ngày Sinh: {this.state.userData.ngaysinh}</Text>
              <Text>Giới Tính: {this.state.userData.gioitinh}</Text>
              <Text>Chức Vụ: {this.state.userData.chucvu}</Text>
              <Text>Lương: {this.state.userData.luong}</Text>
        </View>
      </View>
    );
  }
}