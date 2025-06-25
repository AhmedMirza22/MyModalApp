import React, { useState } from 'react';
import { View, Text, StyleSheet, LayoutAnimation, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RelevantTopicCard = ({ topic, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={toggleExpand} activeOpacity={0.8}>
      <View style={styles.header}>
        <Text style={styles.topic}>{topic}</Text>
        <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="#333" />
      </View>
      {expanded && <Text style={styles.description}>{description}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EEE6FF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topic: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4C1B9C',
    flex: 1,
    paddingRight: 10,
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: '#444',
  },
});

export default RelevantTopicCard;
