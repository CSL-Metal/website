import React from 'react';
import useTranslations from '../useTranslations';
import { saveAs } from 'file-saver'
import { useStaticQuery, graphql } from 'gatsby'


import * as S from './styled';

const Footer = () => {
  const data = useStaticQuery(graphql`
  query Footer {
    allFile(filter: {publicURL: {regex: "/kvkk/"}}) {
      nodes {
        publicURL
        name
      }
    }
  }
  `)
  let pdf_aydinlatma_metni
  let pdf_kvkk_politikasi
  let pdf_basvuru_formu
  data.allFile.nodes.map(item => {
    if (item.name === "kvkk-1") {
      pdf_aydinlatma_metni = item.publicURL
    } else if (item.name === "kvkk-2") {
      pdf_kvkk_politikasi = item.publicURL
    } else if (item.name === "kvkk-3") {
      pdf_basvuru_formu = item.publicURL
    }
  })

  const {
    privacy
  } = useTranslations();
  const saveFile = () => {
    saveAs(pdf_aydinlatma_metni, 'AYDINLATMA_METNİ.pdf')
    saveAs(pdf_kvkk_politikasi, 'Kişisel_Verilerin_Korunması_ve_İşlenmesi_Politikası.pdf')
    saveAs(pdf_basvuru_formu, 'Kişisel_Veri_Sahibi-Başvuru_Formu.pdf')
  }
  return (
    <button style={{ zIndex: 999, border: "none", background: "none" }} onClick={saveFile}>
      <S.FooterWrapper>
        <S.FooterContainer>
          <p>{privacy}</p>
        </S.FooterContainer>
      </S.FooterWrapper>
    </button>
  );
};

export default Footer;