import React, {FC, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import NewRecomends from './components/NewRecommends'
import RentRecommends from './components/RentRecommends'
import SecondRecommends from './components/SecondRecommends'
import {IrecommendItem} from '../../index.d'
export type TrecommendCategory = 'new' | 'second' | 'rent'
interface Iprops {
  recommends: {
    new: IrecommendItem[]
    rent: IrecommendItem[]
    second: IrecommendItem[]
  }
}
const HomeRecommends: FC<Iprops> = ({recommends}) => {
  const [recommendCategory, changeRecommendCategory] = useState(
    'second' as TrecommendCategory,
  )
  const {
    second: secondRecommends,
    new: newRecommends,
    rent: rentRecommends,
  } = recommends

  return (
    <View style={style.recommendWrapper}>
      <View style={style.recommendCategory}>
        <Text style={style.recommendTitle}>为您推荐</Text>
        <View style={style.categoryBox}>
          <Text
            onPress={() => changeRecommendCategory('second')}
            style={{
              color: recommendCategory === 'second' ? '#ffb200' : '#666',
              fontSize: 12,
            }}>
            二手房
          </Text>
          <Text
            onPress={() => changeRecommendCategory('new')}
            style={{
              color: recommendCategory === 'new' ? '#ffb200' : '#666',
              fontSize: 12,
              marginLeft: 12,
            }}>
            新房
          </Text>
          <Text
            onPress={() => changeRecommendCategory('rent')}
            style={{
              color: recommendCategory === 'rent' ? '#ffb200' : '#666',
              fontSize: 12,
              marginLeft: 12,
            }}>
            租房
          </Text>
        </View>
      </View>
      {recommendCategory === 'new' ? (
        <NewRecomends recommends={newRecommends} />
      ) : recommendCategory === 'second' ? (
        <SecondRecommends recommends={secondRecommends} />
      ) : (
        <RentRecommends recommends={rentRecommends} />
      )}
    </View>
  )
}

const style = StyleSheet.create({
  recommendWrapper: {
    marginTop: 15,
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