'use client';

import React, { useState } from 'react';
import InvestmentsBreakdown from './InvestmentsBreakdown';
import FinancialTransactions from './FinancialTransactions';

type Tab = 'investments' | 'transactions';

const InvestmentTabs = () => {
    const [activeTab, setActiveTab] = useState<Tab>('investments');

    return (
        <div>
            {/* Tabs Navigation */}
            <div className="border-b border-gray-200">
                <div className="flex space-x-0">
                    <button
                        className={`px-6 py-3 text-sm font-medium border-b-2 ${
                            activeTab === 'investments'
                                ? 'border-green-500 text-green-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                        onClick={() => setActiveTab('investments')}
                    >
                        Investments Breakdown
                    </button>
                    <button
                        className={`px-6 py-3 text-sm font-medium border-b-2 ${
                            activeTab === 'transactions'
                                ? 'border-green-500 text-green-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                        onClick={() => setActiveTab('transactions')}
                    >
                        Financial Transactions
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div className="p-4">
                {activeTab === 'investments' ? <InvestmentsBreakdown /> : <FinancialTransactions />}
            </div>
        </div>
    );
};

export default InvestmentTabs;