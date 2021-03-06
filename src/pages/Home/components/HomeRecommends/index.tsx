import React, { FC, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IhomeRecommends } from '@/api/home'
import NewRecomends from './components/NewRecommends'
import RentRecommends from './components/RentRecommends'
import SecondRecommends from './components/SecondRecommends'
interface Iprops {
  recommends: IhomeRecommends
}
const HomeRecommends: FC<Iprops> = ({ recommends }) => {
  const [recommendCategory, changeRecommendCategory] = useState('SECOND')
  const { secondRecommends, newRecommends, rentRecommends } = recommends

  return (
    <View style={styles.recommendWrapper}>
      <View style={styles.recommendCategory}>
        <Text style={styles.recommendTitle}>为您推荐</Text>
        <View style={styles.categoryBox}>
          <Text
            onPress={() => changeRecommendCategory('SECOND')}
            style={{
              color: recommendCategory === 'SECOND' ? '#ffb200' : '#666',
              fontSize: 12,
            }}>
            二手房
          </Text>
          <Text
            onPress={() => changeRecommendCategory('NEW')}
            style={{
              color: recommendCategory === 'NEW' ? '#ffb200' : '#666',
              fontSize: 12,
              marginLeft: 12,
            }}>
            新房
          </Text>
          <Text
            onPress={() => changeRecommendCategory('RENT')}
            style={{
              color: recommendCategory === 'RENT' ? '#ffb200' : '#666',
              fontSize: 12,
              marginLeft: 12,
            }}>
            租房
          </Text>
        </View>
      </View>
      {recommendCategory === 'NEW' ? (
        <NewRecomends recommends={newRecommends} />
      ) : recommendCategory === 'SECOND' ? (
        <SecondRecommends recommends={secondRecommends} />
      ) : (
        <RentRecommends recommends={rentRecommends} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  recommendWrapper: {
    margin: 15,
  },
  recommendCategory: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recommendTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryBox: {
    flexDirection: 'row',
    paddingTop: 4,
  },
})

export default HomeRecommends
