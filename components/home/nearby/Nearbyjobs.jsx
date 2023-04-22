import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import styles from './nearbyjobs.style'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import { useRouter } from 'expo-router'
import { COLORS } from '../../../constants'
import useFetch from '../../../service/api/useFetch'

const Nearbyjobs = () => {
  const router = useRouter();

  //calling object exported from class by passing param of endpoint & query
  const { data, isLoading, error } = useFetch(
    'search',
    {
      query: ' React native',
      num_page: 1
    }
  );

  return (
    <View style={styles.container}>

      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      {/* actual container */}
      <View style={styles.cardsContainer}>
        {/* dynamic block of code */}
        {isLoading ? (<ActivityIndicator size={'large'} colors={COLORS.primary} />)
          : error ? (<Text>Something went wrong</Text>)
            : (
              data?.map((job) => (
                <NearbyJobCard

                />
              ))
            )
        }
      </View>
    </View>
  )
}

export default Nearbyjobs