import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import db from '../config';

export default class SummaryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      presentStudents: [],
      absentStudents: [],
    };
  }

  todaysDate = () => {
    var today = new Date();
    var dates = today.getDate();
    var months = today.getMonth() + 1;
    var years = today.getFullYear();

    if (dates < 10) {
      dates = '0' + dates;
    }
    if (months < 10) {
      months = '0' + months;
    }
    today = dates + '-' + months + '-' + years;
    return today;
  };

  componentDidMount = async () => {
    var today = await this.todaysDate();
    var students_ref = db.ref('/').on('value', (data) => {
      var class_a = data.val();
      var present_student = [];
      var absent_student = [];

      for (var s in class_a) {
        if (class_a[s][today] === 'present') {
          present_student.push(class_a[s]);
        }
        if (class_a[s][today] === 'absent') {
          absent_student.push(class_a[s]);
        }
      }
      present_student.sort(function (a, b) {
        a.roll_no - b.roll_no;
      });
      absent_student.sort(function (a, b) {
        a.roll_no - b.roll_no;
      });
      this.setState({
        presentStudents: present_student,
        absentStudents: absent_student,
      });
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1 }}></View>
        <Text style={styles.title}>Present Students List</Text>
        <Text style={styles.title}>Absent Students List</Text>
        <View style={styles.present}>
          {this.state.presentStudents.map((student, index) => (
            <Text style={{ fontSize: 18 }}>{student.name}</Text>
          ))}
        </View>
        <View style={styles.absent}>
          {this.state.absentStudents.map((student, index) => (
            <Text style={{ fontSize: 18 }}>{student.name}</Text>
          ))}
        </View>
        <View
          style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text> Total: 3 students </Text>
          <Text>Present: {this.state.presentStudents.length}</Text>
          <Text>Absent: {this.state.absentStudents.length}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  present: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    color: 'green',
  },
  absent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    color: 'red',
  },
});
