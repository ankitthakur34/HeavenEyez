import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Teaser from '../components/Teaser'
import Bts from '../components/Bts'

const teaserNbts = () => {
  return (
    <View>
      <Teaser/>
      <Bts/>
    </View>
  )
}

export default teaserNbts

const styles = StyleSheet.create({})