import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
  


export default function NewNav() {
    return (  
        <Breadcrumb separator=''>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>
      
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>About</BreadcrumbLink>
        </BreadcrumbItem>
      
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
           )
        }