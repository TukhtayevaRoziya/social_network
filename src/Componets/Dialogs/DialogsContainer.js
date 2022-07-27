import { compose } from 'redux'
import { connect } from 'react-redux'

import { Dialogs } from './Dialogs'
import { actions } from '../../Redux/DialogReduser'

let SendMessage = actions.SendMessageAC

let mapStateToProps = (state) => ({ dialog: state.DialogPage })

export default compose(
    connect(mapStateToProps, { SendMessage })
)(Dialogs)