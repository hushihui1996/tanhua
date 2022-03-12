import React, {Component} from 'react';
import {View, TouchableOpacity, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Input} from 'react-native-elements';

// type IOSMode = 'date' | 'time' | 'datetime' | 'countdown';
// type AndroidMode = 'date' | 'time';
// type Display = 'spinner' | 'default' | 'clock' | 'calendar';
// type IOSDisplay = 'default' | 'compact' | 'inline' | 'spinner';
export default class index extends Component {
  state = {
    show: false,
    dateText: '',
  };

  setDate = () => {
    const {date} = this.state;
    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  };
  handleDateChange = (event, date) => {
    //这是设置日期,即确认按钮
    if (event.type === 'set') {
      const value = this.dateToString(date);
      let dateText = this.state.dateText;
      dateText = value;
      this.setState({dateText, show: false});
      this.props.getDateValue(dateText);
    } else {
      //这是点击取消按钮
      this.setState({show: false});
    }
  };

  //日期转字符串的函数
  dateToString = date => {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString();
    var day = date.getDate().toString();
    if (day.length == 1) {
      day = '0' + day;
    }
    if (month.length == 1) {
      month = '0' + month;
    }
    var dateTime = year + '-' + month + '-' + day;
    return dateTime;
  };
  datepicker = type => {
    this.show(type);
  };
  render() {
    const {show, dateText} = this.state;
    const {
      date,
      mode,
      minimumDate,
      maximumDate,
      display,
      placeholder,
      onChange, //日期确定事件
      getDateValue, //input框事件
    } = this.props;
    return (
      <View>
        {/*4.0 日期选择器 开始*/}
        <View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date ? date : new Date()}
              mode={mode ? mode : 'date'}
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              display={display}
              onChange={onChange ? onChange : this.handleDateChange}
              onPress={getDateValue}
            />
          )}
        </View>
        {/*4.0 日期选择器 结束*/}
        <TouchableOpacity
          onPress={this.datepicker.bind(this, mode ? mode : 'date')}
          activeOpacity={1}>
          <Input value={dateText} placeholder={placeholder} disabled={true} />
        </TouchableOpacity>
      </View>
    );
  }
}
