import React,{useState} from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"

import diceOne from "./assets/dice1.png"
import diceTwo from "./assets/dice2.png"
import diceThree from "./assets/dice3.png"
import diceFour from "./assets/dice4.png"
import diceFive from "./assets/dice5.png"
import diceSix from "./assets/dice6.png"





const App = () =>{
  const [uri, setUri] = useState(diceOne);
  // const [two, setTwo] = useState(diceOne)

  const playButton = () =>{
    let randomNo = Math.floor(Math.random() * 6) + 1;
    // let SecrandomNo = Math.floor(Math.random() * 6) + 1;
  
    switch (randomNo) {
      case 1:
        setUri(diceOne);
        break;
        case 2:
          setUri(diceTwo);
          break;
          case 3:
            setUri(diceThree);
            break;
            case 4:
              setUri(diceFour);
              break; 
              case 5:
                setUri(diceFive);
                break;
                case 6:
                  setUri(diceSix);
                  break;
    
      default:
        setUri(diceOne)
        break;
    }

    // switch (SecrandomNo) {
    //   case 1:
    //     setTwo(diceOne);
    //     break;
    //     case 2:
    //       setTwo(diceTwo);
    //       break;
    //       case 3:
    //         setTwo(diceThree);
    //         break;
    //         case 4:
    //           setTwo(diceFour);
    //           break; 
    //           case 5:
    //             setTwo(diceFive);
    //             break;
    //             case 6:
    //               setTwo(diceSix);
    //               break;
    
    //   default:
    //     setTwo(diceOne)
    //     break;
    // }
  
  
  }

  return(
    <>
      <View style={styles.container}>
        {/* <Image style={styles.image} source={uri}/> */}
        <TouchableOpacity onPress={playButton}>
          {/* <Text style={styles.button}>Roll Dice</Text> */}
          <Image style={styles.image} source={uri}/>
          {/* <Image style={styles.image} source={two}/> */}
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex : 1,
    alignItems : "center",
    justifyContent: "center",
    backgroundColor: "#000"
  },
  image:{
    width: 150,
    height: 150,
  },
  button:{
    fontSize: 20,
    marginTop : 40,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderColor: "#000",
    borderRadius: 5,
    borderWidth: 2,
    fontWeight: "bold",
    backgroundColor: "#000",
    color: "#fff"
    
  }
})