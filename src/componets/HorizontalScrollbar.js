import { Box } from '@mui/system'
import React from 'react'

function HorizontalScrollbar({data}) {
  return (
    <div>
      {data.map((item)=>(

      <Box
      key={item.id || item}
      itemId={item.id || item}
      title={item.id || item}
      m='0 40px'>
 {item}
      </Box>
      )
      )} 
    </div>
  )
}

export default HorizontalScrollbar