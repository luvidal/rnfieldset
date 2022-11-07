import { ReactNode } from 'react'
import { StyleSheet, View, Text, useColorScheme } from 'react-native'

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

interface StyleColors { lightfore:string, lightback:string, darkfore:string, darkback:string }
interface FieldProps  { title:string; children:ReactNode; colors?:StyleColors }

const Fieldset = ( { title, children = undefined, colors = undefined }:FieldProps ) => 
{
  const defaults = { darkfore:'#666', darkback:'#111', lightfore:'#BBB', lightback:'#F0F0F0' } // default palette
  const c = Object.assign({}, defaults, colors) // the palette is full now

  const dark = (useColorScheme() || 'light') == 'dark'

  const color = dark ? c.darkfore : c.lightfore
  const backgroundColor = dark ? c.darkback : c.lightback

  return (
    <View style={[ fieldset.box, { borderColor:color, backgroundColor } ]}>
      <Text style={[ fieldset.label, { color, backgroundColor } ]}>   { title }   </Text> 
      { children }
    </View>
)}

export default Fieldset

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
const fieldset = StyleSheet.create(
{
  box:{
    borderWidth:1,
    borderRadius:4,
    padding:20,
    margin:20,
  },

  label:{
    position:'absolute', 
    top:-9, 
    left:11,
  },
});
