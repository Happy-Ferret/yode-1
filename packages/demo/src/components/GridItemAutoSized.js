import React from 'react'
import R from 'ramda'
import sizeMe from 'react-sizeme'

let isNilOrZero = R.anyPass([
    R.isNil,
    R.equals(0)
])

const GridItemAutoSized = React.createClass({
    componentWillReceiveProps(nextProps) {
        const {size, itemId, onHeightChanged} = this.props
        if (!isNilOrZero(nextProps.size.height) &&
            size.height !== nextProps.size.height) {
            onHeightChanged({
                itemId,
                height: nextProps.size.height
            })
        }
    },
    render() {
        const {children} = this.props
        return <div>
                   { children }
               </div>
    }
})

export default sizeMe({
    monitorHeight: true,
    monitorWidth: false
})(GridItemAutoSized)
