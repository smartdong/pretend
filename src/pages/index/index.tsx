import React, { ReactElement } from 'react'
import { View, Text } from '@tarojs/components'
import { observer } from 'mobx-react'
import { useStore } from '../../store'

const IndexPage = observer(function IndexPage (): ReactElement | null {
  const { words } = useStore()

  return (
    <View style={style.page}>
      <Text style={style.test}>{words.today}</Text>
    </View>
  )
})

const style: Record<string, React.CSSProperties> = {
  page: {
    height: '100%',
    backgroundColor: 'rgb(32, 32, 32)'
  },
  test: {
    color: 'white'
  }
}

export default IndexPage
