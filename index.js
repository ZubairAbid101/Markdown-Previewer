/* App Component Starts Here */
function App() {
    const [text, setText] = React.useState(`
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
    }
}
\`\`\`


You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
            - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`)
    marked.setOptions({
        breaks: true
    })

    function handleChange(event) {
        setText(event.target.value)
    }

    return(
        <div>
            <h1 id="editor-heading">Editor</h1>
            <Editor
            handleChange={handleChange}
            text={text} />

            <h1 id="preview-heading">Preview</h1>
            <Previewer 
            text={text} />
        </div>
    )
}

/* Editor Component Starts Here*/
function Editor(props) {
    return(
    <textarea
        id="editor"
        name="text"
        value={props.text}
        onChange={props.handleChange}
    />
    )
}

/* Previewer Starts Here */
function Previewer(props) {
    return (
        <div
            id="preview"
            dangerouslySetInnerHTML={{
                __html: marked.parse(props.text)
            }} />
    )
}


let root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)