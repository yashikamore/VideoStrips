// In App.js in a new project

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { RootStackParamList } from '../../navigation/roots';
import { SafeAreaView } from 'react-native-safe-area-context';
type SongListNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'TestStrips'
>;

const MyFeed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<SongListNavigationProp>();

  const ImageCard = () => {
    return (
      <View style={styles.card}>
        <View>
          <Image
            source={require('../../assest/MainBefore.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.metaRow}>
            <Text style={styles.badge}>New</Text>
            <Text style={styles.time}>2:39</Text>
          </View>
          <Text style={styles.title}>TrasFroming a houses </Text>
          <Text style={styles.author}>yashika</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerSubtitle}>TODAY</Text>
        <View style={styles.feedView}>
          <Text style={styles.headerTitle}>My Feed</Text>
          <TouchableOpacity onPress={() => navigation.navigate('TestStrips')}>
            <Image
              source={require('../../assest/woman.png')}
              style={styles.profieImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </ScrollView>
    </SafeAreaView>
  );
};
export default MyFeed;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  headerView: {
    height: 100,
    backgroundColor: '#ebebe8',
    justifyContent: 'flex-end',
    padding: 10,
    paddingVertical: 5,
  },
  headerSubtitle: { fontSize: 14, color: '#666666' },
  headerTitle: { fontSize: 28, fontWeight: '800' },
  profieImage: { height: 40, width: 40 },
  feedView: { flexDirection: 'row', justifyContent: 'space-between' },
  card: {
    flex: 1,
    marginTop: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    margin: 20,
    gap: 10,
  },
  image: { width: '100%', height: 230, borderRadius: 10 },
  textContainer: {
    width: '100%',
    padding: 12,
    position: 'absolute',
    backgroundColor: '#FFF',
    bottom: -20,
    borderRadius: 10,
    elevation: 5,
  },
  badge: {
    color: '#007BFF',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 4,
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 2 },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between' },
  author: { fontSize: 13, color: '#555' },
  time: { fontSize: 13, color: '#999' },
});
