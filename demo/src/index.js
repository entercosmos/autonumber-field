import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import AutonumberField from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

const stringifyJSON = (args) => {
    try {
        return JSON.stringify(args, null, 2)
    } catch (e) {
        return null
    }
}

const log = (name) => (args) => {
    alert(`
name: ${name}
args: ${stringifyJSON(args)}
    `)
}


class Demo extends Component {
    render() {
        return <div>
            <h1>AutonumberField Demo</h1>
            <p>Used for displaying an unique incremented number for each record.</p>
            <h2>Context based</h2>
            <p>The behaviour of the component changes based on the context in which it is rendered.</p>
            <h3>
                RecordDetail context
            </h3>
            <p>Used for displaying the autonumber field in a record detail.</p>
            <Viewport>
                <div
                    className={css`
                        width: 600px;
                    `}
                >
                    <AutonumberField
                        id={'fld1'}
                        contextId={'recordDetail'}
                        roleId={'editor'}
                        autonumber={'123'}
                    />
                </div>
            </Viewport>
            <h3>RecordGalleryCard context</h3>
            <Viewport>
                <div
                    className={css`
                        width: 220px;
                        height: 22px;
                        background-color: #fff;
                    `}
                >
                    <AutonumberField
                        id={'fld1'}
                        contextId={'recordGalleryCard'}
                        roleId={'readOnly'}
                        autonumber={'123'}
                    />
                </div>
            </Viewport>
            <h3>RecordListItem context</h3>
            <Viewport>
                <div
                    className={css`
                        width: 220px;
                        height: 24px;
                        background-color: #fff;
                    `}
                >
                    <AutonumberField
                        id={'fld1'}
                        contextId={'recordListItem'}
                        roleId={'readOnly'}
                        autonumber={'123'}
                    />
                </div>
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
