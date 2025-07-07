import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { use, useState } from "react";

export default function Home(){

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    const [contador3, setContador3] = useState(0);
    const [contador4, setContador4] = useState(0);
    const [contador5, setContador5] = useState(0);

    function Aumentar1(){
        setContador1(contador1 + 1);
    }
    function Diminuir1(){
        if (contador1 > 0 )    
            setContador1(contador1 - 1);
    }
    function Aumentar2(){
        setContador2(contador2 + 1);
    }
    function Diminuir2(){
        if (contador2 > 0)
            setContador2(contador2 - 1);
    }
    function Aumentar3(){
        setContador3(contador3 + 1);
    }
    function Diminuir3(){
        if (contador3 > 0)
            setContador3(contador3 - 1);
    }
    function Aumentar4(){
        setContador4(contador4 + 1);
    }
    function Diminuir4(){
        if (contador4 > 0)
            setContador4(contador4 - 1);
    }
    function Aumentar5(){
        setContador5(contador5 + 1);
    }
    function Diminuir5(){
        if (contador5 > 0)
            setContador5(contador5 - 1);
    }


    return(
        <ScrollView>
            <View style={styles.contairnerProfile}>
                <Text>
                    Estoque
                </Text>

                <View style={styles.viewImg}>
                    <Image
                        style={styles.img}
                        source={{ uri: 'https://media.istockphoto.com/id/182897295/de/foto/pinkes-canvas-schuh.jpg?s=612x612&w=0&k=20&c=7t90JNzKUr3DYUTAlG_hgUKlEjtmu-aJQbHjmeRkd5M=',}}
                    />
                    <Text>
                        Descrição breve
                    </Text>

                    <Text>{contador1}</Text>

                    <TouchableOpacity
                    onPress={Aumentar1}>
                        <Text>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={Diminuir1}>
                        <Text>-</Text>
                    </TouchableOpacity>

                    <Image
                    style={styles.img}
                    source={{uri: 'https://img.freepik.com/fotos-gratis/tenis-de-corrida-esportivos_1203-3414.jpg?semt=ais_hybrid&w=740'}}
                    />
                    <Text>
                        Descrição breve
                    </Text>

                    <Text>{contador2}</Text>

                    <TouchableOpacity
                    onPress={Aumentar2}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={Diminuir2}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>

                    <Image
                    style={styles.img}
                    source={{uri: 'https://media.istockphoto.com/id/491603822/pt/foto/par-de-sapatos-desportivos-verde.jpg?s=612x612&w=0&k=20&c=XFNzktqFxao2qt4P1NFBBzmq8LelubVXdXQKXth1AbE='}}
                    />

                    <Text>
                        Descrição breve
                    </Text>

                    
                    <TouchableOpacity
                    onPress={Aumentar3}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={Diminuir3}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>

                    <Image
                    style={styles.img}
                    source={{uri: 'https://media.istockphoto.com/id/1688015574/pt/foto/white-sneaker-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=2nzu1e2LMqe2GR0wga2iytvAM7poL2ppDiX_2HZZMGU='}}
                    />
                    <Text>
                        Descrição breve
                    </Text>
                    <TouchableOpacity
                    onPress={Aumentar4}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={Diminuir4}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>

                    <Image
                    style={styles.img}
                    source={{uri: 'https://vizzent.vtexassets.com/arquivos/ids/626980-400-400/tenis-casual-masculino-mormaii-preto-203364-3-.jpg?v=638768688541970000'}}
                    />
                    <Text>
                        Descrição breve
                    </Text>

                    <TouchableOpacity
                    onPress={Aumentar5}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={Diminuir5}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contairnerProfile:{
        alignItems: 'center',
        padding: 20,
        // borderWidth: 1,
    },
    img:{
        height: 150,
        width: 150
    }
})