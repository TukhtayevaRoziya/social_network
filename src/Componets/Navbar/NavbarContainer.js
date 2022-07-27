import { connect } from 'react-redux'

import { Navbar } from './Navbar'

let mapStateToProps = (state) => ({
    Navbar: state.Sidebar
})

export default connect(mapStateToProps)(Navbar)