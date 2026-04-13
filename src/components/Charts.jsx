import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const Charts = ({ data }) => {
    // 1. Function to group GDP into "Buckets" (The Histogram logic)
    const getGdpData = () => {
        const bins = [
            { name: '< $5k', max: 5000, count: 0 },
            { name: '$5k - $15k', max: 15000, count: 0 },
            { name: '$15k - $40k', max: 40000, count: 0 },
            { name: '$40k - $80k', max: 80000, count: 0 },
            { name: '> $80k', max: Infinity, count: 0 }
        ];

        data.forEach(country => {
            const bucket = bins.find(b => country.gdp <= b.max);
            if (bucket) bucket.count++;
        });

        return bins;
    };

    // 2. Function to group Population into buckets
    const getPopData = () => {
        const bins = [
            { name: '< 1M', max: 1000000, count: 0 },
            { name: '1M - 10M', max: 10000000, count: 0 },
            { name: '10M - 50M', max: 50000000, count: 0 },
            { name: '50M - 100M', max: 100000000, count: 0 },
            { name: '> 100M', max: Infinity, count: 0 }
        ];

        data.forEach(country => {
            const bucket = bins.find(b => country.pop <= b.max);
            if (bucket) bucket.count++;
        });

        return bins;
    };

    // Custom Tooltip to match your dark theme
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{ background: '#1e293b', border: '1px solid #334155', padding: '10px', borderRadius: '8px', color: '#f8fafc' }}>
                    <p style={{ margin: 0, color: '#94a3b8' }}>{label}</p>
                    <p style={{ margin: 0, color: '#06b6d4', fontWeight: 'bold' }}>
                        {payload[0].value} Countries
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px', width: '100%', maxWidth: '1000px', margin: '0 auto 40px auto' }}>
            
            {/* GDP Histogram */}
            <div className="card">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-main)' }}>GDP Per Capita Distribution</h3>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart data={getGdpData()} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255, 255, 255, 0.05)'}} />
                            <Bar dataKey="count" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Population Histogram */}
            <div className="card">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-main)' }}>Population Distribution</h3>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart data={getPopData()} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255, 255, 255, 0.05)'}} />
                            <Bar dataKey="count" fill="#22d3ee" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};

export default Charts;