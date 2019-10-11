import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'quanlynhanvien.db', createFromLocation : 1});
 
export default class ViewAllUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.id} style={{ backgroundColor: 'pink', padding: 20,borderWidth:2,borderRadius:30,marginTop:10,marginLeft:10,marginRight:10 }}>
              <Text>ID: {item.id}</Text>
              <Text>Mã Nhân Viên: {item.manv}</Text>
              <Text>Tên Nhân Viên: {item.tennv}</Text>
              <Text>Địa Chỉ: {item.diachi}</Text>
              <Text>Số Điện Thoại: {item.phone}</Text>
              <Text>Ngày Sinh: {item.ngaysinh}</Text>
              <Text>Giới Tính: {item.gioitinh}</Text>
              <Text>Chức Vụ: {item.chucvu}</Text>
              <Text>Lương: {item.luong}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}