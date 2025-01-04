import React from 'react';
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import RightSidebar from '@/components/ui/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'Bitch',lastName:'please',email:'bitch_please@gmail.com'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type = "greeting"
            title= "Welcome"
            user = {loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
           />
           <TotalBalanceBox
            accounts ={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
           />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
            {
                id: 1,
                availableBalance: 5000.25,
                currentBalance: 5200.00,
                accessToken: "token123",
                // Provide the remaining required properties here
            },
            {
                $id: "2",
                availableBalance: 0.25,
                currentBalance: 0.00,
                accessToken: "token456",
                // Provide the remaining required properties here
            },
        ]}
      />

    </section>
  );
};

export default Home;
