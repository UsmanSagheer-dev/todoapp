import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import { ArrowBack, Billicon } from '../../assets/svg/index'

const Statistics = () => {
  return (
    <View>
     <Header
        icon={<ArrowBack width={18} height={18} />}
        title={'Statistics'}
        icon2={<Billicon width={16} height={18}/>}
      />
    </View>
  )
}

export default Statistics