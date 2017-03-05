import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = (props) => {
  return (
    <div>
      <Sparklines data={props.data} height={120} width={180}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  )
}

export default Chart