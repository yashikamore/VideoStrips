import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { data, data2 } from '../../common/data';

const TestStrips = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.section}>
      <View style={styles.textView}>
        <Text style={styles.title}>{item.title}</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          keyboardType="numeric"
          maxLength={3}
        />
      </View>
      <View style={styles.row}>
        <View style={styles.colorRow}>
          {item.colors.map((color: any, idx: any) => (
            <TouchableOpacity style={{ flex: 1 }}>
              <View
                key={idx}
                style={[styles.colorBox, { backgroundColor: color }]}
              ></View>
              <Text style={styles.valueText}>{item.values[idx]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );

  const renderItem2 = ({ item, index }: any) => {
    const isFirst = index === 0;
    const isLast = index === data2.length - 1;
    return (
      <View
        style={[
          {
            height: isFirst ? 90 : isLast ? 195 : 117,
            justifyContent: isFirst
              ? 'flex-end'
              : isLast
              ? 'space-evenly'
              : 'flex-end',
            borderTopStartRadius: isFirst ? 10 : isLast ? 0 : 0,
            borderTopEndRadius: isFirst ? 10 : isLast ? 0 : 0,
            borderBottomEndRadius: isFirst ? 0 : isLast ? 10 : 0,
            borderBottomStartRadius: isFirst ? 0 : isLast ? 10 : 0,
            borderTopWidth: isFirst ? 0.5 : isLast ? 0 : 0,
            borderBottomWidth: isFirst ? 0 : isLast ? 0.5 : 0,
          },
          styles.stripview,
        ]}
      >
        <View
          style={[
            {
              backgroundColor: item.color,
            },
            styles.stripsBox,
          ]}
        ></View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity>
          <Image
            source={require('../../assest/back.png')}
            style={styles.backImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextFont}>Next</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.headertext}>Test Strips</Text>
      <View style={{ flexDirection: 'row', gap: 0 }}>
        <FlatList
          data={data2}
          renderItem={renderItem2}
          contentContainerStyle={{ gap: 0 }}
        />
        <FlatList data={data} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};
export default TestStrips;
const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#e9f0e9' },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  backImage: { height: 20, width: 40 },
  headertext: {
    color: '#2d1555ff',
    fontWeight: '800',
    fontSize: 24,
    paddingVertical: 10,
  },
  nextButton: {
    backgroundColor: '#afacacff',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  nextFont: { color: '#000', fontSize: 12, fontWeight: '600' },
  section: { marginBottom: 10 },
  title: { fontWeight: 'bold', fontSize: 16, marginBottom: 8 },
  row: { flexDirection: 'row', alignItems: 'center' },
  colorRow: { flexDirection: 'row', flex: 1, alignItems: 'center' },
  colorBox: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    borderRadius: 4,
  },
  valueText: {
    fontSize: 12,
    color: '#999999',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  input: {
    width: '25%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 14,
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  stripview: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#666666',
    backgroundColor: '#e9f0e9',
    width: 30,
    alignItems: 'flex-end',
  },
  stripsBox: {
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
  },
});
