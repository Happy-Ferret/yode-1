import React from 'react'
import R from 'ramda'
import * as palette from 'material-ui/styles/colors';
import NodeEditorStateLabels from './NodeEditorStateLabels'
import IconButton from 'material-ui/IconButton';
import IconClose from 'material-ui/svg-icons/navigation/close';

export let closeIconConfig = {
    tooltip: 'close editor',
    Icon: IconClose
}

function getIcons (iconConfigs) {
    let icons = iconConfigs.map(({Icon, ...otherProps} , i) => (
        <IconButton {...otherProps} style={ iconButtonStyle } tooltipPosition={ 'top-center' } iconStyle={ iconStyle } key={ i }>
            <Icon />
        </IconButton>
    ))
    return R.init(icons).map((iconNode, i) => (
        <div key={ i } style={ { marginRight: 8 } }>
            { iconNode }
        </div>
    )).concat(R.last(icons));
}

const EditorHeader = ({titlePrefix, title, node, iconConfigs}) => {
    let icons;
    if (iconConfigs) {
        icons = getIcons(iconConfigs)
    }
    return <div style={ headerContainerStyle }>
               <div style={ textAndLabelContainerStyle }>
                   <span style={ subtleLabelStyle }>  { titlePrefix }  </span>
                   { ' ' }
                   { title }
                   { ' ' }
                   <NodeEditorStateLabels node={ node } />
               </div>
               { icons }
           </div>
}

export default EditorHeader

let headerContainerStyle = {
    display: 'flex'
}

let textAndLabelContainerStyle = {
    flexGrow: 2
}

let iconButtonStyle = {
    padding: 0,
    width: 19,
    height: 19
}

let iconStyle = {
    width: iconButtonStyle.width,
    height: iconButtonStyle.height
}

let subtleLabelStyle = {
    color: palette.grey700
}