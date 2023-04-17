import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'

import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'

const Popularjobs = () => {

  const router = useRouter();
  const isLoading = false;
  const isError = false;

  return (
    <View style={styles.container}>

      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      {/* actual container */}
      <View style={styles.cardsContainer}>
        {/* dynamic block of code */}
        {isLoading ? (<ActivityIndicator size={'large'} colors={COLORS.primary} />)
          : isError ? (<Text>Something went wrong</Text>)
            : <FlatList
              data={[1, 2, 3, 4, 5]}
              // on basic form callback renderitem={()=>()}
              //then to get access on each item, then doing destructured (item, index)
              //become renderItem={({item, index})=>()}
              renderItem={({ item }) => (
                <PopularJobCard item={item} />
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