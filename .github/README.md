# rnfieldset
A container with a title for React Native

By organizing elements and explaining to the user what they do, fieldsets are a terrific approach to enhance the user experience of your app.

## Installation

Use Node Package Manager [npm](https://www.npmjs.com/) to install this React Native component.

```bash
npm install rnfieldset
```

## Usage

```typescript

import Fieldset from 'rnfieldset'

// palette for light and dark modes (100% optional)
const colors = { darkfore:'#666', darkback:'#111', lightfore:'#BBB', lightback:'#FFF' }

<Fieldset title='Fieldset Example' colors={ colors }>
  <Text style={{ color:'cyan' }}>Hello</Text>
  <Text style={{ color:'magenta' }}>World!</Text>
</Fieldset>

```

!(https://github.com/luvidal/rnfieldset/assets/iphone.png)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
