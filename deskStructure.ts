import {StructureBuilder} from 'sanity/structure'

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Pages')
    .items([
      S.listItem()
        .title('Landing Page')
        .child(S.document().schemaType('landingPage').documentId('landingPage')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['landingPage'].includes(listItem?.getId() || ''),
      ),
    ])

//? structure resource https://www.sanity.io/docs/set-up-structure-builder-to-override-the-default-list-view
//? create single Documents data https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
