import { RelatorioEntradaType } from '@/@classes/Relatorio'
import '@grapecity/wijmo.styles/wijmo.css'
import * as wjGridXlsx from '@grapecity/wijmo.xlsx'

type RelatorioMovimentacaoExcelParams = {
  data: RelatorioEntradaType[]
  name: string
}
export const RelatorioMovimentacaoExcel = async ({
  data,
  name,
}: RelatorioMovimentacaoExcelParams) => {
  const workbook = exportExpenseReport({ data, name })
  workbook.saveAsync(`${name}.xlsx`)
}
const exportExpenseReport = ({
  data,
  name,
}: RelatorioMovimentacaoExcelParams) => {
  const chaves = Object.keys(data[0]!)
  const book = new wjGridXlsx.Workbook()
  const simpleCaptionStyle = new wjGridXlsx.WorkbookStyle(),
    accentCaptionStyle = new wjGridXlsx.WorkbookStyle(),
    totalCaptionStyle = new wjGridXlsx.WorkbookStyle(),
    valueStyle = new wjGridXlsx.WorkbookStyle(),
    highlightedValueStyle = new wjGridXlsx.WorkbookStyle(),
    tableHeaderStyle = new wjGridXlsx.WorkbookStyle(),
    tableFooterCurrencyStyle = new wjGridXlsx.WorkbookStyle(),
    tableValueStyle = new wjGridXlsx.WorkbookStyle(),
    tableDateStyle = new wjGridXlsx.WorkbookStyle(),
    tableCurrencyStyle = new wjGridXlsx.WorkbookStyle(),
    tableIntegerStyle = new wjGridXlsx.WorkbookStyle()
  simpleCaptionStyle.hAlign = wjGridXlsx.HAlign.Right
  accentCaptionStyle.font = new wjGridXlsx.WorkbookFont()
  accentCaptionStyle.font.color = '#808097'
  totalCaptionStyle.basedOn = simpleCaptionStyle
  totalCaptionStyle.font = new wjGridXlsx.WorkbookFont()
  totalCaptionStyle.font.bold = true
  totalCaptionStyle.hAlign = wjGridXlsx.HAlign.Right
  valueStyle.font = new wjGridXlsx.WorkbookFont()
  valueStyle.font.family = 'Arial'
  highlightedValueStyle.basedOn = valueStyle
  highlightedValueStyle.fill = new wjGridXlsx.WorkbookFill()
  highlightedValueStyle.fill.color = '#e1e1e1'
  tableHeaderStyle.font = new wjGridXlsx.WorkbookFont()
  tableHeaderStyle.font.bold = true
  tableHeaderStyle.fill = new wjGridXlsx.WorkbookFill()
  tableHeaderStyle.fill.color = '#fad9cd'
  tableFooterCurrencyStyle.basedOn = tableHeaderStyle
  tableFooterCurrencyStyle.format = wjGridXlsx.Workbook.toXlsxNumberFormat('c2')
  tableFooterCurrencyStyle.hAlign = wjGridXlsx.HAlign.Right
  tableValueStyle.fill = new wjGridXlsx.WorkbookFill()
  tableValueStyle.fill.color = '#f4b19b'
  tableDateStyle.basedOn = tableValueStyle
  tableCurrencyStyle.basedOn = tableValueStyle
  tableCurrencyStyle.format = wjGridXlsx.Workbook.toXlsxNumberFormat('c2')
  tableIntegerStyle.basedOn = tableValueStyle
  tableIntegerStyle.format = wjGridXlsx.Workbook.toXlsxNumberFormat('00')

  const aba = new wjGridXlsx.WorkSheet()
  const linhas = aba.rows
  book.sheets.push(aba)
  aba.name = name

  //DEFINIÇÃO DAS COLUNAS
  for (let i = 0; i < chaves.length; i++) {
    aba.columns[i] = new wjGridXlsx.WorkbookColumn()
    aba.columns[i].width = 200
  }
  //DEFINIÇÃO DAS LINHAS

  //TITULO
  linhas[0] = new wjGridXlsx.WorkbookRow()
  linhas[0].cells[0] = new wjGridXlsx.WorkbookCell()
  linhas[0].cells[0].style = new wjGridXlsx.WorkbookStyle()
  linhas[0].cells[0].style.font = new wjGridXlsx.WorkbookFont()
  linhas[0].cells[0].colSpan = chaves.length
  linhas[0].cells[0].style.font.bold = true
  linhas[0].height = 45
  linhas[0].cells[0].style.font.size = 32
  linhas[0].cells[0].value = name

  //HEADER
  linhas[1] = new wjGridXlsx.WorkbookRow()
  for (let i = 0; i < chaves?.length; i++) {
    linhas[1].cells[i] = new wjGridXlsx.WorkbookCell()
    linhas[1].cells[i]!.style = new wjGridXlsx.WorkbookStyle()
    linhas[1].cells[i]!.style.font = new wjGridXlsx.WorkbookFont()
    linhas[1].cells[i]!.style.font.bold = true
    linhas[1].cells[i]!.value = chaves?.[i]
  }

  //BODY
  for (let i = 0; i < data?.length; i++) {
    linhas[i + 2] = new wjGridXlsx.WorkbookRow()
    //DEFINIÇÃO DO CONTEUDO DAS LINHAS
    for (let j = 0; j < chaves.length; j++) {
      linhas[i + 2]!.cells[j] = new wjGridXlsx.WorkbookCell()
      if (data && i < data.length && chaves.length && j < chaves.length) {
        linhas[i + 2].cells[j].value = data[i][chaves[j]]!
      }
    }
  }
  return book
}
