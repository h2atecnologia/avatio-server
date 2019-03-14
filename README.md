# Avatio Server

Generates SVG and PNG avatars from query string. It is used to embed created avatars
to your page.

Examples:

```
https://img.avatio.cool/avatar.svg?sex=Female&options%5BFemaleHeadShape%5D%5Bcolor%5D=%23DBA582&options%5BEyes%5D%5Btype%5D=B&options%5BEyes%5D%5Bcolor%5D=%23634e34&options%5BMouth%5D%5Btype%5D=D&options%5BMouth%5D%5Bcolor%5D=%23AE0923&options%5BFemaleHair%5D%5Btype%5D=C&options%5BFemaleHair%5D%5Bcolor%5D=%236A4E42&options%5BFemaleGlasses%5D%5Btype%5D=A&options%5BFemaleGlasses%5D%5Bcolor%5D=%23FFFFFF&options%5BFemaleClothes%5D%5Btype%5D=F&options%5BFemaleClothes%5D%5Bcolor%5D=%23c0392b&options%5BFemaleClothes%5D%5BsecondaryColor%5D=%232ecc71&options%5BFemaleAccessory%5D%5Btype%5D=FemaleB&options%5BFemaleAccessory%5D%5Bcolor%5D=%23c0392b&options%5BNose%5D%5Bcolor%5D=%23ef843b
https://img.avatio.cool/avatar.svg?sex=Male&options%5BMaleHeadShape%5D%5Bcolor%5D=%23FBD2B4&options%5BEyes%5D%5Btype%5D=C&options%5BEyes%5D%5Bcolor%5D=%23634e34&options%5BMouth%5D%5Btype%5D=A&options%5BMouth%5D%5Bcolor%5D=%23ef843b&options%5BMaleHair%5D%5Btype%5D=E&options%5BMaleHair%5D%5Bcolor%5D=%238D4A43&options%5BMaleGlasses%5D%5Btype%5D=A&options%5BMaleGlasses%5D%5Bcolor%5D=%23d35400&options%5BMaleClothes%5D%5Btype%5D=C&options%5BMaleClothes%5D%5Bcolor%5D=%237f8c8d&options%5BMaleClothes%5D%5BsecondaryColor%5D=%23ecf0f1&options%5BMaleAccessory%5D%5Btype%5D=A&options%5BMaleAccessory%5D%5Bcolor%5D=%2334495e&options%5BMaleFacialHair%5D%5Btype%5D=A&options%5BNose%5D%5Bcolor%5D=%23ef843b
https://img.avatio.cool/avatar.png?sex=Male&options%5BMaleHeadShape%5D%5Bcolor%5D=%23FBD2B4&options%5BEyes%5D%5Btype%5D=C&options%5BEyes%5D%5Bcolor%5D=%23634e34&options%5BMouth%5D%5Btype%5D=A&options%5BMouth%5D%5Bcolor%5D=%23ef843b&options%5BMaleHair%5D%5Btype%5D=E&options%5BMaleHair%5D%5Bcolor%5D=%238D4A43&options%5BMaleGlasses%5D%5Btype%5D=A&options%5BMaleGlasses%5D%5Bcolor%5D=%23d35400&options%5BMaleClothes%5D%5Btype%5D=C&options%5BMaleClothes%5D%5Bcolor%5D=%237f8c8d&options%5BMaleClothes%5D%5BsecondaryColor%5D=%23ecf0f1&options%5BMaleAccessory%5D%5Btype%5D=A&options%5BMaleAccessory%5D%5Bcolor%5D=%2334495e&options%5BMaleFacialHair%5D%5Btype%5D=A&options%5BNose%5D%5Bcolor%5D=%23ef843b
```

It is used by [Avatio UI](https://avatio.cool).

## Runing server

At first you have download all dependencies

```bash
yarn install
```

and then you can run the server

```bash
yarn start
```

or watch changes for development

```bash
yarn wathc
```