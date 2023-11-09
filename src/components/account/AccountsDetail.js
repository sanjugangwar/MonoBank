import React from 'react'
import HeadingTag from '../shared/HeadingTag'
import GetAllAccounts from './GetAllAccounts'

const AccountsDetail = () => {
  return (
    <div>

        <HeadingTag first="Accounts" second="Detail"></HeadingTag>
        <GetAllAccounts></GetAllAccounts>

    </div>
  )
}

export default AccountsDetail