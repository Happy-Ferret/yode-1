import React from 'react'
import RaisedButtonWithTooltip from './RaisedButtonWithTooltip'
import OpenFileMenuContainer from './OpenFileMenuContainer'
import AddFileDialogContainer from './AddFileDialogContainer'

const Controls = ({onOpenFunctionEditorUnderCursorClick, openFunctionEditorDisabled}) => {
    let openFunctionEditorButtonProps = {
        label: 'open function editor',
        style: buttonStyle,
        onTouchTap: onOpenFunctionEditorUnderCursorClick,
        disabled: openFunctionEditorDisabled,
        tooltip: 'opens function editor for function under cursor in focused editor'
    }
    return <div style={ containerStyle }>
               <RaisedButtonWithTooltip {...openFunctionEditorButtonProps} />
               <OpenFileMenuContainer />
               <AddFileDialogContainer />
           </div>
}

export default Controls

let buttonStyle = {
    marginRight: 10
}

let containerStyle = {
    padding: 24,
    // needed space for tooltip
    paddingTop: 32
}
