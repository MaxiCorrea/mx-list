import * as React from 'react'
import { List, Theme, createStyles, makeStyles } from '@material-ui/core'

const useMxListStyles = makeStyles<Theme>(() =>
  createStyles({
    root: {
      fontFamily: 'Gotham',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '26px',
      minWidth: '160px'
    },
    padding: {
      paddingTop: '0px',
      paddingBottom: '0px'
    }
  })
)

export const MxList: React.FC = (props) => {
  const classes = useMxListStyles()
  return (
    <List
      classes={{
        root: classes.root,
        padding: classes.padding
      }}
    >
      {props.children}
    </List>
  )
}
