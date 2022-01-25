import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import * as S from './Book.style';


export default function BookList() {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [ano, setAno] = useState("");
    const [livros, setLivros] = useState([
        { titulo: 'Duna', autor: 'Frank Herbert', ano: '2021' },
        { titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: '1899' },
        { titulo: 'Auto da Compadecida', autor: 'Ariano Suassuna', ano: '1955' },
    ]);

    const schema = yup.object({
        titulo: yup.string().required('Título obrigatório!').max(100),
        autor: yup.string().required('Nome do autor obrigatório!').max(50),
        ano: yup.number('').required('Ano obrigatório!'),
    })

    const formik = useFormik({
        initialValues: {
            titulo,
            autor,
            ano
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
            setLivros(livro => [...livro, values])
        },
    })

    return (
        <div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <label> Title:</label>
                    <S.Input type="text" name="titulo" value={formik.values.titulo} onChange={formik.handleChange} placeholder={formik.errors.titulo} />
                    <label> Author: </label>
                    <S.Input type="text" name="autor" value={formik.values.autor} onChange={formik.handleChange} placeholder={formik.errors.autor} />
                    <label> Year: </label>
                    <S.Input type="text" name="ano" value={formik.values.ano} onChange={formik.handleChange} placeholder={formik.errors.ano} />
                    <S.Button type="submit">Enviar</S.Button>
                </form>
                <br></br>
            </div>
            <S.divTable>
                <S.divTableHeading>
                    <S.divTableRow>
                        <S.divTableHead>Title</S.divTableHead>
                        <S.divTableHead>Author</S.divTableHead>
                        <S.divTableHead>Year</S.divTableHead>
                    </S.divTableRow>
                </S.divTableHeading>
                <S.divTableBody>
                    {livros.map((livro, i) => {
                        return (
                            <S.divTableRow key={i}>
                                <S.divTableCell>{livro.titulo}</S.divTableCell>
                                <S.divTableCell>{livro.autor}</S.divTableCell>
                                <S.divTableCell>{livro.ano}</S.divTableCell>
                            </S.divTableRow>
                        );
                    })}
                </S.divTableBody>
            </S.divTable>
        </div>
    );
}
