import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import RelevantTopicCard from '../components/RelevantTopicCard';
import userData from '../data/userData.json';

const userScreen = () => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    setuser(userData);
  }, []);

  // if (!user?) return null;

  return (
    <LinearGradient
      colors={['#57496d', '#8e5ed5']} // Gradient from top to bottom
      // style={}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarCircle}>
          <Image
            source={require('../../assets/UserThumbnail.png')} // Replace with your logo path
            style={styles.logo}
            resizeMode="contain"
          />
          </View>
        </View>

        <Text style={styles.name}>{user?.Name}</Text>
        <Text style={styles.info}>{user?.Location}</Text>
        <Text style={styles.info}>{user?.Age} years old</Text>
        <Text style={styles.info}>Data Scientist @ Reuters</Text>

        <View style={styles.intentTag}>
          <Text style={styles.intentText}>High Intent</Text>
          <Icon name="priority-high" size={18} color="#4C1B9C" />
        </View>

        <View style={styles.statsBox}>
          <Text style={styles.statText}>
            Searched for <Text style={styles.bold}>Nike Airforce 1s</Text> 🔗
          </Text>
          <Text style={styles.statText}>3x today</Text>
          <Text style={styles.conversion}>
            📈 Conversion likelihood: {user?.conversionLikelihood ? user?.conversionLikelihood :'82'}%
          </Text>

          <View style={styles.dots}>
            <View style={styles.dotInactive} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.topicSection}>
          {user?.RelevantTopics.map((item, index) => (
            <RelevantTopicCard
              key={index}
              topic={item.topic}
              description={item.description}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Campaign</Text>
        </TouchableOpacity>
      </ScrollView>
     </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  avatarContainer: {
    marginVertical: 20,
  },
  avatarCircle: {
    backgroundColor: '#915EFF',
    borderRadius: 100,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  info: {
    color: 'white',
    fontSize: 14,
  },
  intentTag: {
    backgroundColor: '#EDE2FF',
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  intentText: {
    fontWeight: 'bold',
    color: '#4C1B9C',
    marginRight: 8,
  },
  statsBox: {
    backgroundColor: '#D9CFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    width: '100%',
  },
  statText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#56466e',
    marginBottom: 4,
    fontWeight:'600'
  },
  bold: {
    fontWeight: 'bold',
  },
  conversion: {
    textAlign: 'center',
    color: '#4C1B9C',
    fontSize: 14,
    marginTop: 6,
    fontWeight:'bold'
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    // backgroundColor:'red',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#C9AAF7',
    marginHorizontal: 4,
  },
  dotInactive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#654e86',
    marginHorizontal: 4,
  },
  topicSection: {
    width: '100%',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#654e86',//#57496d //#9A30FF
    padding: 16,
    borderRadius: 100,
    marginTop: 20,
    width: '90%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
  logo: {
    width: 150,
    height: 150,
  }
});

export default userScreen;
