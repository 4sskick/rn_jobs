import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableOpacityBase
} from 'react-native'

import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { icons } from '../../../constants'

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {

  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState(jobTypes[0])

  const JobItem = ({ job }) => (
    <TouchableOpacity
      style={styles.tab(activeJobType, job)}
      onPress={() => {
        setActiveJobType(job);
        // router.push(`/search/${job}`)
      }}
    >
      <Text
        style={styles.tabText(activeJobType, job)}
      >{job}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View styles={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => { }}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => { }}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          //how each item should like
          //to get each element should call 'item'
          //other variable name won't do
          renderItem={({ item }) => <JobItem job={item} />}
        />
      </View>
    </View>
  )
}

export default Welcome