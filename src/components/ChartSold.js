import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { LineChart } from 'react-native-line-chart'
const screenWidth = Dimensions.get('window').width;
const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [{
    data: [0, 4, 5, 1, 2]
  }]
}
const chartConfig = {
  backgroundGradientFrom: '#f1f1f1',
  backgroundGradientTo: '#f1f1f1',
  color: () => `#2f95dc`
}
function ChartSold(props) {
  return (
    <View style={{alignItems:'center'}}>
      <Text style={{fontSize:16,fontWeight:'700', paddingHorizontal:20, marginTop:30}}>Biểu đồ thông tin bán hàng của 5 tháng gần nhất</Text>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
}

export default ChartSold;