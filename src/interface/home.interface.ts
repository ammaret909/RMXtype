interface HeaderAllDTOoutItem {
  rcc: string;
  headerNumber: number;
  file_name: string;
  header_name: string;
  popup: string;
  sequence: number;
}

interface DataPage {
  rcc: string;
  namePage: string;
  title: string;
  subTitleH1: string;
  subTitleH2: string;
  subTitleH3: string;
  header1DTOoutList: HeaderAllDTOoutItem[];
  header2DTOoutList: HeaderAllDTOoutItem[];
  header3DTOoutList: HeaderAllDTOoutItem[];
}
