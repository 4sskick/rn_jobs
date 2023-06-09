import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'

import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import useFetch from '../../../service/api/useFetch'

const Popularjobs = () => {

  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {

    setSelectedJob(item.job_id);
  };


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
        <Text style={styles.headerTitle}>Popular</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      {/* actual container */}
      <View style={styles.cardsContainer}>
        {/* dynamic block of code */}
        {isLoading ? (<ActivityIndicator size={'large'} colors={COLORS.primary} />)
          : error ? (<Text>Something went wrong</Text>)
            : <FlatList
              data={data}
              // on basic form callback renderitem={()=>()}
              //then to get access on each item, then doing destructured (item, index)
              //become renderItem={({item, index})=>()}
              renderItem={({ item }) => (
                <PopularJobCard
                  item={item}
                  selectedJobs={selectedJob}
                  handleCardPress={handleCardPress} />
              )}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              horizontal
            />
        }
      </View>
    </View>
  )
}

export default Popularjobs