import { useState, useEffect, useRef, useCallback } from "react";
import "./fix.css";

// ─── Shared color config ───────────────────────────────────────────────────
const PRIMARY = "#6d28d9";
const ACCENT = "#f59e0b";

// ─── Navbar ────────────────────────────────────────────────────────────────
function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "planner", label: "Planner" },
    { id: "features", label: "Features" },
    { id: "budget", label: "Budget" },
    { id: "explore", label: "Explore" },
    { id: "family", label: "Family" },
    { id: "hotel", label: "Hotel" },
    { id: "payment", label: "Payment" },
  ];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,0.93)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid #f3f4f6", boxShadow: "0 1px 8px rgba(0,0,0,.06)"
    }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => setPage("home")} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer" }}>
          <span style={{ fontSize: 24 }}>🏡</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: PRIMARY }}>
            BalikKampung<span style={{ color: ACCENT }}>.id</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 24, alignItems: "center" }} className="desktop-nav">
          {links.map(l => (
            <button key={l.id} onClick={() => setPage(l.id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 13, fontWeight: page === l.id ? 600 : 500,
              color: page === l.id ? PRIMARY : "#374151",
              borderBottom: page === l.id ? `2px solid ${ACCENT}` : "2px solid transparent",
              paddingBottom: 2, transition: "all .2s"
            }}>{l.label}</button>
          ))}
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ border: `1px solid ${PRIMARY}`, color: PRIMARY, background: "none", padding: "6px 16px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Sign In</button>
          <button style={{ background: PRIMARY, color: "#fff", border: "none", padding: "6px 16px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Login</button>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){ .desktop-nav{ display:none !important; } }
      `}</style>
    </nav>
  );
}

// ─── Page: HOME ────────────────────────────────────────────────────────────
function HomePage({ setPage }) {
  const features = [
    { icon: "📋", title: "Planner", desc: "To-do list & packing list untuk perjalanan mudik yang terorganisir.", page: "planner", color: "#ede9fe" },
    { icon: "🗺️", title: "Rute Dan Jadwal", desc: "Peta rute, kalender mudik, dan jadwal kegiatan di kampung halaman.", page: "features", color: "#dbeafe" },
    { icon: "💰", title: "Budget Tracker", desc: "Pantau pengeluaran transport, makan, tol, dan oleh-oleh dalam satu tempat.", page: "budget", color: "#dcfce7" },
    { icon: "🚑", title: "Bantuan Darurat", desc: "Akses cepat ambulans, derek, bengkel, dan layanan darurat terdekat.", page: "features", color: "#fee2e2" },
    { icon: "👨‍👩‍👧‍👦", title: "Pantau Lokasi Keluarga", desc: "Pantau lokasi keluarga tersayang langsung dari website.", page: "family", color: "#ede9fe" },
    { icon: "🌍", title: "Explore Fasilitas", desc: "Cari wisata kuliner, ATM, dan rest area terdekat.", page: "explore", color: "#dbeafe" },
    { icon: "💳", title: "Metode Pembayaran", desc: "Tentukan metode pembayaran yang akan anda gunakan.", page: "payment", color: "#dcfce7" },
    { icon: "🏨", title: "Schedule Hotel", desc: "Cari jadwal dan tempat yang sesuai dengan kebutuhan anda.", page: "hotel", color: "#fee2e2" },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: `linear-gradient(135deg, rgba(109,40,217,.88) 0%, rgba(109,40,217,.55) 50%, rgba(0,0,0,.3) 100%), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600') center/cover`,
        color: "#fff", padding: "96px 24px"
      }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <p style={{ color: ACCENT, fontWeight: 600, letterSpacing: 4, textTransform: "uppercase", fontSize: 12, marginBottom: 12 }}>Mudik Season 2025</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.5rem,7vw,4.5rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
            Plan Your<br />Journey<br /><span style={{ color: ACCENT }}>Home.</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,.8)", maxWidth: 520, marginBottom: 32 }}>
            Mudik lebih tenang dengan rencana yang matang — mulai dari rute, anggaran, jadwal, hingga darurat.
          </p>

          {/* Search Box */}
          <div style={{ background: "#fff", borderRadius: 20, padding: 20, maxWidth: 680, boxShadow: "0 20px 50px rgba(0,0,0,.25)" }}>
            <h2 style={{ color: "#1f2937", fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Cari Transportasi</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: 10 }}>
              {[["Kota Asal", ["Jakarta","Bandung","Purwakarta","Garut","Medan"]], ["Tujuan", ["Jakarta","Bandung","Purwakarta","Garut","Medan"]]].map(([ph, opts]) => (
                <select key={ph} defaultValue="" style={{ border: "1px solid #e5e7eb", padding: "10px 12px", borderRadius: 10, fontSize: 13, color: "#374151", background: "#f9fafb" }}>
                  <option value="" disabled>{ph}</option>
                  {opts.map(o => <option key={o}>{o}</option>)}
                </select>
              ))}
              <input type="date" style={{ border: "1px solid #e5e7eb", padding: "10px 12px", borderRadius: 10, fontSize: 13, color: "#374151", background: "#f9fafb" }} />
              <button style={{ background: PRIMARY, color: "#fff", border: "none", borderRadius: 10, padding: "10px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                Cari →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={{ maxWidth: 1152, margin: "0 auto", padding: "64px 24px" }}>
        <p style={{ textAlign: "center", color: ACCENT, fontWeight: 600, textTransform: "uppercase", letterSpacing: 4, fontSize: 11, marginBottom: 8 }}>Semua yang kamu butuhkan</p>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, color: "#1f2937", marginBottom: 40, fontFamily: "'Playfair Display',serif" }}>Fitur Unggulan</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
          {features.map(f => (
            <button key={f.title} onClick={() => setPage(f.page)} style={{
              background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)",
              padding: 24, display: "flex", flexDirection: "column", gap: 10, textAlign: "left",
              border: "none", cursor: "pointer", transition: "transform .2s, box-shadow .2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,.13)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,.07)"; }}>
              <div style={{ width: 48, height: 48, background: f.color, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{f.icon}</div>
              <div style={{ fontWeight: 700, color: "#1f2937", fontSize: 15 }}>{f.title}</div>
              <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{f.desc}</div>
              <div style={{ color: PRIMARY, fontSize: 13, fontWeight: 600, marginTop: "auto" }}>Buka →</div>
            </button>
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section style={{ background: PRIMARY, color: "#fff", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, textAlign: "center" }}>
          {[["38 Jt+", "Pemudik tiap tahun di Indonesia"], ["500+", "Kota & destinasi terjangkau"], ["24 Jam", "Layanan bantuan darurat"]].map(([n, d]) => (
            <div key={n}>
              <p style={{ fontSize: "2.5rem", fontWeight: 900, fontFamily: "'Playfair Display',serif" }}>{n}</p>
              <p style={{ color: "rgba(255,255,255,.7)", fontSize: 13, marginTop: 4 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ─── Page: PLANNER ─────────────────────────────────────────────────────────
function PlannerPage({ setPage }) {
  const initTodos = [
    { id: 1, text: "Konfirmasi tiket perjalanan", done: true },
    { id: 2, text: "Cek kondisi kendaraan", done: true },
    { id: 3, text: "Siapkan oleh-oleh untuk keluarga", done: false },
    { id: 4, text: "Tarik tunai / isi e-money", done: false },
    { id: 5, text: "Informasikan tetangga sebelum berangkat", done: false },
  ];
  const initItems = [
    { id: 1, text: "Baju untuk 5 hari", done: true, cat: "pakaian" },
    { id: 2, text: "Perlengkapan mandi", done: true, cat: "lainnya" },
    { id: 3, text: "Charger & power bank", done: false, cat: "lainnya" },
    { id: 4, text: "Dokumen perjalanan / KTP", done: false, cat: "dokumen" },
    { id: 5, text: "Snack untuk perjalanan", done: false, cat: "lainnya" },
    { id: 6, text: "Obat-obatan dasar", done: false, cat: "lainnya" },
  ];

  const [todos, setTodos] = useState(initTodos);
  const [items, setItems] = useState(initItems);
  const [todoInput, setTodoInput] = useState("");
  const [itemInput, setItemInput] = useState("");
  const [packFilter, setPackFilter] = useState("all");
  const [nextId, setNextId] = useState(100);

  const addTodo = () => {
    if (!todoInput.trim()) return;
    setTodos(t => [...t, { id: nextId, text: todoInput, done: false }]);
    setNextId(n => n + 1);
    setTodoInput("");
  };
  const addItem = () => {
    if (!itemInput.trim()) return;
    setItems(i => [...i, { id: nextId, text: itemInput, done: false, cat: "lainnya" }]);
    setNextId(n => n + 1);
    setItemInput("");
  };

  const catColors = { pakaian: { bg: "#ede9fe", text: "#7c3aed", label: "Pakaian" }, dokumen: { bg: "#dbeafe", text: "#1d4ed8", label: "Dokumen" }, lainnya: { bg: "#f3f4f6", text: "#6b7280", label: "Lainnya" } };

  const ListSection = ({ title, icon, color, list, setList, input, setInput, addFn, countLabel, extraFilter }) => {
    const shown = extraFilter ? list.filter(it => packFilter === "all" || it.cat === packFilter) : list;
    const done = list.filter(i => i.done).length;
    return (
      <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 40, height: 40, background: color, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{icon}</div>
          <h2 style={{ fontWeight: 700, color: "#1f2937", fontSize: 18, fontFamily: "'Playfair Display',serif" }}>{title}</h2>
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && addFn()}
            placeholder={`Tambah ${extraFilter ? "item" : "kegiatan"}...`}
            style={{ flex: 1, border: "1px solid #e5e7eb", padding: "10px 12px", borderRadius: 10, fontSize: 13, outline: "none" }} />
          <button onClick={addFn} style={{ background: PRIMARY, color: "#fff", border: "none", borderRadius: 10, padding: "10px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>+ Add</button>
        </div>
        {extraFilter && (
          <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            {[["all","Semua"],["pakaian","👕 Pakaian"],["dokumen","📄 Dokumen"],["lainnya","🎒 Lainnya"]].map(([v,l]) => (
              <button key={v} onClick={() => setPackFilter(v)} style={{
                fontSize: 11, padding: "4px 12px", borderRadius: 20, border: "none", cursor: "pointer",
                background: packFilter === v ? PRIMARY : "#f3f4f6",
                color: packFilter === v ? "#fff" : "#6b7280", fontWeight: 500
              }}>{l}</button>
            ))}
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {shown.map(item => (
            <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 12, background: "#f9fafb", borderRadius: 12, padding: "10px 12px" }}>
              <input type="checkbox" checked={item.done} onChange={() => setList(l => l.map(x => x.id === item.id ? {...x, done: !x.done} : x))}
                style={{ width: 16, height: 16, accentColor: PRIMARY, cursor: "pointer" }} />
              <span style={{ flex: 1, fontSize: 13, textDecoration: item.done ? "line-through" : "none", color: item.done ? "#9ca3af" : "#374151" }}>{item.text}</span>
              {extraFilter && <span style={{ fontSize: 11, background: catColors[item.cat]?.bg, color: catColors[item.cat]?.text, padding: "2px 10px", borderRadius: 20 }}>{catColors[item.cat]?.label}</span>}
              <button onClick={() => setList(l => l.filter(x => x.id !== item.id))} style={{ background: "none", border: "none", cursor: "pointer", color: "#d1d5db", fontSize: 13, lineHeight: 1 }}>✕</button>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #f3f4f6", display: "flex", justifyContent: "space-between", fontSize: 12, color: "#9ca3af" }}>
          <span>{done} / {list.length} {countLabel}</span>
          <button onClick={() => setList(l => l.filter(x => !x.done))} style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", fontSize: 12 }}>Hapus yang selesai</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <PageHeader badge="Persiapan Mudik" title="Mudik Planner" sub="To-do list & packing list untuk perjalanan yang sempurna." />
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "40px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="grid-responsive">
        <ListSection title="Mudik To-Do List" icon="✅" color="#ede9fe" list={todos} setList={setTodos} input={todoInput} setInput={setTodoInput} addFn={addTodo} countLabel="selesai" />
        <ListSection title="Packing List" icon="🧳" color="#fef3c7" list={items} setList={setItems} input={itemInput} setInput={setItemInput} addFn={addItem} countLabel="dikemas" extraFilter />
      </div>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px 40px" }}>
        <div style={{ background: `linear-gradient(to right, ${PRIMARY}, #a78bfa)`, color: "#fff", borderRadius: 20, padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Lanjut ke Budget Tracker?</div>
            <div style={{ color: "rgba(255,255,255,.75)", fontSize: 13, marginTop: 4 }}>Rencanakan anggaran mudikmu agar tidak over budget.</div>
          </div>
          <button onClick={() => setPage("budget")} style={{ background: "#fff", color: PRIMARY, border: "none", borderRadius: 14, padding: "10px 24px", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Kelola Budget →</button>
        </div>
      </div>
      <Footer />
      <style>{`.grid-responsive{ } @media(max-width:768px){ .grid-responsive{ grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// ─── Page: BUDGET ──────────────────────────────────────────────────────────
function BudgetPage() {
  const [vals, setVals] = useState({ transport: 1200000, food: 750000, toll: 600000, souvenir: 450000, budget: 3000000 });

  const spent = vals.transport + vals.food + vals.toll + vals.souvenir;
  const left = vals.budget - spent;
  const pct = Math.min(100, Math.round((spent / vals.budget) * 100));
  const fmt = n => "Rp " + n.toLocaleString("id-ID");

  const cats = [
    { key: "transport", label: "🚌 Transportasi", color: "#6d28d9" },
    { key: "food", label: "🍱 Makanan", color: "#8b5cf6" },
    { key: "toll", label: "⛽ Tol & BBM", color: "#a78bfa" },
    { key: "souvenir", label: "🎁 Oleh-oleh", color: "#c4b5fd" },
  ];

  return (
    <div>
      <PageHeader badge="Kelola Keuangan" title="Budget Tracker" sub="Pantau semua pengeluaran mudikmu dalam satu tampilan." />
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "40px 24px" }}>
        {/* Summary cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, marginBottom: 28 }} className="grid-responsive4">
          {[["Total Budget", fmt(vals.budget), "#1f2937"],["Terpakai", fmt(spent), "#ef4444"],["Sisa", fmt(left >= 0 ? left : 0), "#22c55e"]].map(([l,v,c]) => (
            <div key={l} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)", padding: 16 }}>
              <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>{l}</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: c }}>{v}</p>
            </div>
          ))}
          <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,.06)", padding: 16 }}>
            <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 8 }}>Penggunaan</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ flex: 1, background: "#f3f4f6", borderRadius: 99, height: 8, overflow: "hidden" }}>
                <div style={{ width: `${pct}%`, background: pct > 90 ? "#ef4444" : PRIMARY, height: "100%", borderRadius: 99, transition: "width .6s" }} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: PRIMARY }}>{pct}%</span>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="grid-responsive">
          {/* Input */}
          <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, background: "#dcfce7", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>💰</div>
              <h2 style={{ fontWeight: 700, color: "#1f2937", fontSize: 18, fontFamily: "'Playfair Display',serif" }}>Input Anggaran</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {cats.map(c => (
                <div key={c.key}>
                  <label style={{ fontSize: 11, fontWeight: 600, color: "#6b7280", display: "block", marginBottom: 4 }}>{c.label}</label>
                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", fontSize: 11, color: "#9ca3af" }}>Rp</span>
                    <input type="number" value={vals[c.key]} onChange={e => setVals(v => ({...v, [c.key]: Number(e.target.value)||0}))}
                      style={{ border: "1px solid #e5e7eb", padding: "10px 12px 10px 28px", width: "100%", borderRadius: 10, fontSize: 13, outline: "none", boxSizing: "border-box" }} />
                  </div>
                </div>
              ))}
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#6b7280", display: "block", marginBottom: 4 }}>💼 Total Budget Tersedia</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", fontSize: 11, color: "#9ca3af" }}>Rp</span>
                  <input type="number" value={vals.budget} onChange={e => setVals(v => ({...v, budget: Number(e.target.value)||0}))}
                    style={{ border: `2px solid ${PRIMARY}`, padding: "10px 12px 10px 28px", width: "100%", borderRadius: 10, fontSize: 13, outline: "none", background: "#f5f3ff", boxSizing: "border-box" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Distribution */}
          <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, background: "#ede9fe", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📊</div>
              <h2 style={{ fontWeight: 700, color: "#1f2937", fontSize: 18, fontFamily: "'Playfair Display',serif" }}>Distribusi Budget</h2>
            </div>

            {/* Simple donut-ish visual */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
              <div style={{ width: 140, height: 140, borderRadius: "50%", background: `conic-gradient(
                ${cats[0].color} 0deg ${Math.round((vals.transport/Math.max(spent,1))*360)}deg,
                ${cats[1].color} ${Math.round((vals.transport/Math.max(spent,1))*360)}deg ${Math.round(((vals.transport+vals.food)/Math.max(spent,1))*360)}deg,
                ${cats[2].color} ${Math.round(((vals.transport+vals.food)/Math.max(spent,1))*360)}deg ${Math.round(((vals.transport+vals.food+vals.toll)/Math.max(spent,1))*360)}deg,
                ${cats[3].color} ${Math.round(((vals.transport+vals.food+vals.toll)/Math.max(spent,1))*360)}deg 360deg
              )`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div style={{ width: 80, height: 80, background: "#fff", borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ fontSize: 11, color: "#9ca3af" }}>Terpakai</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: PRIMARY }}>{pct}%</div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {cats.map(c => {
                const p = spent > 0 ? Math.round((vals[c.key] / spent) * 100) : 0;
                return (
                  <div key={c.key}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 10, height: 10, borderRadius: "50%", background: c.color, display: "inline-block" }} />
                        <span style={{ color: "#6b7280" }}>{c.label}</span>
                      </div>
                      <div>
                        <span style={{ fontWeight: 600, color: "#1f2937" }}>{p}%</span>
                        <span style={{ fontSize: 11, color: "#9ca3af", marginLeft: 6 }}>({fmt(vals[c.key])})</span>
                      </div>
                    </div>
                    <div style={{ background: "#f3f4f6", borderRadius: 99, height: 6, overflow: "hidden" }}>
                      <div style={{ width: `${p}%`, background: c.color, height: "100%", borderRadius: 99, transition: "width .6s" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style>{`
        @media(max-width:768px){ .grid-responsive{ grid-template-columns:1fr !important; } .grid-responsive4{ grid-template-columns:1fr 1fr !important; } }
      `}</style>
    </div>
  );
}

// ─── Page: FEATURES ────────────────────────────────────────────────────────
function FeaturesPage() {
  const [activities, setActivities] = useState([
    { id: 1, text: "Keberangkatan dari Jakarta", icon: "🚗" },
    { id: 2, text: "Ziarah ke makam leluhur", icon: "🕌" },
    { id: 3, text: "Halal bihalal keluarga besar", icon: "🤝" },
  ]);
  const [actInput, setActInput] = useState("");
  const nextId = useRef(10);

  const emergencies = [
    { icon: "🚑", title: "Ambulans", number: "119", color: "#fee2e2", txt: "#dc2626" },
    { icon: "🚒", title: "Pemadam Kebakaran", number: "113", color: "#ffedd5", txt: "#c2410c" },
    { icon: "👮", title: "Polisi", number: "110", color: "#dbeafe", txt: "#1e40af" },
    { icon: "🚗", title: "Jasa Marga", number: "14080", color: "#dcfce7", txt: "#166534" },
    { icon: "🔧", title: "Derek Jalan Tol", number: "021-8007-7777", color: "#fef9c3", txt: "#92400e" },
    { icon: "⚡", title: "PLN 24 Jam", number: "123", color: "#ede9fe", txt: "#6d28d9" },
  ];

  return (
    <div>
      <PageHeader badge="Fitur Lengkap" title="Rute, Jadwal & Darurat" sub="Peta perjalanan, kalender mudik, dan kontak bantuan darurat." />
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "40px 24px", display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Row 1 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="grid-responsive">
          {/* Map */}
          <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, background: "#dbeafe", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🗺️</div>
              <h2 style={{ fontWeight: 700, fontSize: 18, fontFamily: "'Playfair Display',serif", color: "#1f2937" }}>Peta Rute</h2>
            </div>
            <iframe
              title="route-map"
              style={{ width: "100%", height: 240, borderRadius: 14, border: "none" }}
              src="https://maps.google.com/maps?q=jakarta+to+bandung&t=&z=9&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 12 }}>
              {[["~150 km","Jarak","#ede9fe","#7c3aed"],["~3–4 Jam","Estimasi","#fef3c7",ACCENT],["Tol Cipularang","Via","#dcfce7","#166534"]].map(([v,l,bg,c]) => (
                <div key={l} style={{ background: bg, borderRadius: 12, padding: "10px 8px", textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: "#6b7280" }}>{l}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: c, marginTop: 2 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, background: "#ede9fe", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📅</div>
              <h2 style={{ fontWeight: 700, fontSize: 18, fontFamily: "'Playfair Display',serif", color: "#1f2937" }}>Jadwal Mudik</h2>
            </div>
            {/* Mini calendar */}
            <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500, marginBottom: 8 }}>APRIL 2025</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, textAlign: "center", fontSize: 12, marginBottom: 16 }}>
              {["Min","Sen","Sel","Rab","Kam","Jum","Sab"].map(d => <div key={d} style={{ fontWeight: 600, color: "#9ca3af", padding: "4px 0" }}>{d}</div>)}
              {[""," "," ",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((d,i) => (
                <div key={i} style={{
                  padding: "6px 4px", borderRadius: 8, cursor: d ? "pointer" : "default",
                  background: d === 18 ? ACCENT : (d === 14 || d === 1) ? PRIMARY : "transparent",
                  color: d === 18 || d === 14 || d === 1 ? "#fff" : d ? "#374151" : "transparent"
                }}>{d}</div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
              <input value={actInput} onChange={e => setActInput(e.target.value)} onKeyDown={e => e.key === "Enter" && (() => { if (!actInput.trim()) return; setActivities(a => [...a, { id: nextId.current++, text: actInput, icon: "📌" }]); setActInput(""); })()}
                placeholder="Tambah kegiatan..." style={{ flex: 1, border: "1px solid #e5e7eb", padding: "8px 12px", borderRadius: 10, fontSize: 13, outline: "none" }} />
              <button onClick={() => { if (!actInput.trim()) return; setActivities(a => [...a, { id: nextId.current++, text: actInput, icon: "📌" }]); setActInput(""); }}
                style={{ background: PRIMARY, color: "#fff", border: "none", borderRadius: 10, padding: "8px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>+</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {activities.map(a => (
                <div key={a.id} style={{ background: "#f5f3ff", borderRadius: 12, padding: "10px 12px", display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}>
                  <span style={{ color: "#a78bfa" }}>●</span>
                  <span style={{ flex: 1, color: "#374151" }}>{a.text}</span>
                  <button onClick={() => setActivities(x => x.filter(it => it.id !== a.id))} style={{ background: "none", border: "none", cursor: "pointer", color: "#d1d5db", fontSize: 12 }}>✕</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency */}
        <div id="emergency" style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 40, background: "#fee2e2", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🚨</div>
            <h2 style={{ fontWeight: 700, fontSize: 18, fontFamily: "'Playfair Display',serif", color: "#1f2937" }}>Kontak Darurat</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 14 }}>
            {emergencies.map(e => (
              <div key={e.title} style={{ background: e.color, borderRadius: 16, padding: 16, cursor: "pointer", transition: "transform .2s" }}
                onMouseEnter={ev => ev.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={ev => ev.currentTarget.style.transform = ""}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{e.icon}</div>
                <div style={{ fontWeight: 600, color: "#1f2937", fontSize: 14 }}>{e.title}</div>
                <div style={{ fontSize: 20, fontWeight: 900, color: e.txt, fontFamily: "'Playfair Display',serif", marginTop: 4 }}>{e.number}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <style>{`@media(max-width:768px){ .grid-responsive{ grid-template-columns:1fr !important; } }`}</style>
    </div>
  );
}

// ─── Page: EXPLORE ─────────────────────────────────────────────────────────
function ExplorePage() {
  const [cat, setCat] = useState("wisata");
  const [city, setCity] = useState("Bandung");
  const [query, setQuery] = useState("wisata bandung");

  const places = {
    wisata: [
      { name: "Kawah Putih", dist: "4.2 km", rating: 4.8, tag: "Alam" },
      { name: "Tangkuban Perahu", dist: "7.1 km", rating: 4.7, tag: "Gunung" },
      { name: "Farm House Lembang", dist: "9.3 km", rating: 4.5, tag: "Wisata" },
      { name: "Floating Market Lembang", dist: "8.7 km", rating: 4.4, tag: "Wisata" },
    ],
    kuliner: [
      { name: "Batagor Riri", dist: "1.2 km", rating: 4.9, tag: "Kuliner" },
      { name: "Nasi Timbel Bandung", dist: "0.8 km", rating: 4.7, tag: "Kuliner" },
      { name: "Cibeureum Rest Area", dist: "3.4 km", rating: 4.3, tag: "Kuliner" },
      { name: "Ayam Bakar Wong Solo", dist: "2.1 km", rating: 4.6, tag: "Kuliner" },
    ],
    atm: [
      { name: "ATM BCA Dago", dist: "0.3 km", rating: null, tag: "ATM" },
      { name: "ATM Mandiri Dipatiukur", dist: "0.7 km", rating: null, tag: "ATM" },
      { name: "ATM BNI Cihampelas", dist: "1.1 km", rating: null, tag: "ATM" },
    ],
    restarea: [
      { name: "Rest Area KM 72 Cipularang", dist: "12 km", rating: 4.2, tag: "Rest Area" },
      { name: "Rest Area KM 88 Cipularang", dist: "28 km", rating: 4.1, tag: "Rest Area" },
    ],
  };

  const catOpts = [["wisata","🏞️ Wisata"],["kuliner","🍜 Kuliner"],["atm","🏧 ATM / Bank"],["restarea","🛣️ Rest Area"]];

  const doSearch = () => setQuery(`${cat} ${city}`);

  return (
    <div>
      <div style={{ background: `linear-gradient(135deg, ${PRIMARY}, #a78bfa)`, color: "#fff", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <p style={{ color: ACCENT, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 4, marginBottom: 8 }}>Temukan di Sekitarmu</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Explore Terdekat</h1>
          <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 20 }}>Wisata, kuliner, ATM, dan rest area di sekitar lokasi kamu.</p>
          <div style={{ display: "flex", gap: 10, maxWidth: 500 }}>
            <input value={city} onChange={e => setCity(e.target.value)} placeholder="Cari kota / lokasi..."
              style={{ flex: 1, borderRadius: 14, padding: "10px 16px", fontSize: 13, color: "#1f2937", border: "none", outline: "none" }} />
            <button onClick={doSearch} style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 14, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Cari</button>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "32px 24px" }}>
        {/* Category pills */}
        <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
          {catOpts.map(([v, l]) => (
            <button key={v} onClick={() => { setCat(v); setQuery(`${v} ${city}`); }} style={{
              border: `1px solid ${cat === v ? PRIMARY : "#e5e7eb"}`, padding: "8px 16px", borderRadius: 99,
              fontSize: 13, fontWeight: 500, cursor: "pointer", background: cat === v ? PRIMARY : "#fff",
              color: cat === v ? "#fff" : "#6b7280"
            }}>{l}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }} className="grid-responsive">
          {/* Map */}
          <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", overflow: "hidden" }}>
            <div style={{ background: PRIMARY, color: "#fff", fontSize: 12, fontWeight: 600, padding: "8px 16px" }}>
              📍 Menampilkan {cat} di {city}
            </div>
            <iframe title="explore-map" style={{ width: "100%", height: 360, border: "none" }}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
              allowFullScreen />
          </div>

          {/* List */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2 }}>Hasil Terdekat</p>
            {(places[cat] || []).map(p => (
              <div key={p.name} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 10px rgba(0,0,0,.06)", padding: 14, cursor: "pointer", transition: "transform .2s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = ""}>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#1f2937", marginBottom: 4 }}>{p.name}</div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#9ca3af" }}>
                  <span>📍 {p.dist}</span>
                  {p.rating && <span style={{ color: ACCENT }}>⭐ {p.rating}</span>}
                </div>
                <span style={{ fontSize: 11, background: "#ede9fe", color: PRIMARY, padding: "2px 10px", borderRadius: 20, marginTop: 6, display: "inline-block" }}>{p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <style>{`@media(max-width:768px){ .grid-responsive{ grid-template-columns:1fr !important; } }`}</style>
    </div>
  );
}

// ─── Page: FAMILY ──────────────────────────────────────────────────────────
function FamilyPage() {
  const [roomCode] = useState("MKG-2025");
  const [copied, setCopied] = useState(false);

  const members = [
    { id: 1, name: "Ayah (Budi)", status: "moving", loc: "Tol Cipularang KM 88", time: "2 menit lalu", avatar: "👨" },
    { id: 2, name: "Ibu (Sri)", status: "moving", loc: "Tol Cipularang KM 92", time: "1 menit lalu", avatar: "👩" },
    { id: 3, name: "Kak Rina", status: "stopped", loc: "Rest Area KM 72", time: "8 menit lalu", avatar: "👧" },
    { id: 4, name: "Dito", status: "online", loc: "Jakarta (rumah)", time: "baru saja", avatar: "👦" },
  ];

  const statusColors = { moving: "#f59e0b", stopped: "#ef4444", online: "#22c55e" };
  const statusLabels = { moving: "Bergerak", stopped: "Berhenti", online: "Online" };

  const copyCode = () => { setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div>
      <div style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "#fff", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <p style={{ color: "#a7f3d0", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 4, marginBottom: 8 }}>Mudik Bersama</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 900 }}>Family Share Location</h1>
          <p style={{ color: "rgba(255,255,255,.8)", marginTop: 8 }}>Pantau posisi semua anggota keluarga dalam perjalanan mudik.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "32px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Room code */}
        <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", padding: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, marginBottom: 6 }}>Kode Grup Keluargamu</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 900, color: PRIMARY, letterSpacing: 6 }}>{roomCode}</span>
              <button onClick={copyCode} style={{ background: "#f5f3ff", color: PRIMARY, border: "none", borderRadius: 10, padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                {copied ? "✓ Disalin!" : "Salin Kode"}
              </button>
            </div>
            <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 4 }}>Bagikan kode ini ke anggota keluarga agar bisa bergabung.</p>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button style={{ background: "#059669", color: "#fff", border: "none", borderRadius: 14, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>📤 Share ke WhatsApp</button>
            <button style={{ border: "1px solid #e5e7eb", color: "#6b7280", background: "#fff", borderRadius: 14, padding: "10px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>🔄 Kode Baru</button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }} className="grid-responsive">
          {/* Map */}
          <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,.07)" }}>
            <div style={{ background: "#059669", color: "#fff", padding: "8px 16px", fontSize: 12, fontWeight: 600, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>🗺️ Peta Perjalanan Keluarga — Live</span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, background: "#86efac", borderRadius: "50%", display: "inline-block", animation: "ping 1.5s infinite" }} />
                Live Update
              </span>
            </div>
            <iframe title="family-map" style={{ width: "100%", height: 340, border: "none" }}
              src="https://maps.google.com/maps?q=tol+cipularang&t=&z=10&ie=UTF8&iwloc=&output=embed"
              allowFullScreen />
          </div>

          {/* Members */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2 }}>Anggota Keluarga</p>
            {members.map(m => (
              <div key={m.id} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 10px rgba(0,0,0,.06)", padding: 14, transition: "transform .2s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = ""}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 22 }}>{m.avatar}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#1f2937" }}>{m.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: statusColors[m.status], display: "inline-block" }} />
                      <span style={{ fontSize: 11, color: statusColors[m.status], fontWeight: 600 }}>{statusLabels[m.status]}</span>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>📍 {m.loc}</div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>⏱ {m.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <style>{`@keyframes ping{ 0%{opacity:.8;transform:scale(1)} 100%{opacity:0;transform:scale(2)} } @media(max-width:768px){ .grid-responsive{ grid-template-columns:1fr !important; } }`}</style>
    </div>
  );
}

// ─── Page: HOTEL ───────────────────────────────────────────────────────────
function HotelPage({ setPage }) {
  const [activeTab, setActiveTab] = useState("hotel");
  const [starFilter, setStarFilter] = useState(0);
  const [booked, setBooked] = useState(null);

  const hotels = [
    { id: 1, name: "Hotel Papandayan", city: "Bandung", stars: 5, price: 720000, rating: 4.8, img: "🏨", tags: ["Sarapan","Parkir","Pool"], desc: "Hotel bintang 5 bergaya kolonial di pusat Bandung." },
    { id: 2, name: "Aston Primera Pasteur", city: "Bandung", stars: 4, price: 450000, rating: 4.6, img: "🏩", tags: ["Sarapan","Parkir"], desc: "Dekat Tol Pasteur, pilihan strategis bagi pemudik." },
    { id: 3, name: "Gino Feruci Kebon Kawung", city: "Bandung", stars: 3, price: 290000, rating: 4.4, img: "🏪", tags: ["Parkir"], desc: "Hotel budget nyaman dekat pusat kota Bandung." },
    { id: 4, name: "Swiss-Belinn Ciawi", city: "Bogor", stars: 3, price: 320000, rating: 4.3, img: "🏬", tags: ["Sarapan","Parkir"], desc: "Cocok untuk transit di area Puncak-Bogor." },
    { id: 5, name: "Harris Hotel Sentul", city: "Bogor", stars: 4, price: 480000, rating: 4.5, img: "🏦", tags: ["Sarapan","Pool"], desc: "Resort feel di kawasan Sentul, dekat jalan tol." },
  ];

  const schedules = [
    { id: 1, type: "Kereta", from: "Jakarta Gambir", to: "Yogyakarta", date: "28 Mar 2025", time: "08:00", status: "Confirmed" },
    { id: 2, type: "Bus", from: "Kampung Rambutan", to: "Tasikmalaya", date: "29 Mar 2025", time: "14:30", status: "Pending" },
  ];

  const shown = hotels.filter(h => {
    if (starFilter === 1 && h.stars < 3) return false;
    if (starFilter === 2 && h.price >= 500000) return false;
    if (starFilter === 3 && !h.tags.includes("Parkir")) return false;
    if (starFilter === 4 && !h.tags.includes("Sarapan")) return false;
    return true;
  });

  const fmt = n => "Rp " + n.toLocaleString("id-ID");

  return (
    <div>
      <div style={{ background: PRIMARY, color: "#fff", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <p style={{ color: ACCENT, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 4, marginBottom: 8 }}>Perjalanan & Penginapan</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 900, marginBottom: 20 }}>Hotel & Reschedule</h1>
          <div style={{ display: "flex", gap: 10 }}>
            {[["hotel","🏨 Booking Hotel"],["reschedule","🔄 Reschedule Travel"]].map(([id, l]) => (
              <button key={id} onClick={() => setActiveTab(id)} style={{
                border: "none", borderRadius: 14, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer",
                background: activeTab === id ? "#fff" : "rgba(255,255,255,.2)", color: activeTab === id ? PRIMARY : "#fff"
              }}>{l}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "32px 24px" }}>
        {activeTab === "hotel" ? (
          <>
            {/* Search */}
            <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", padding: 20, marginBottom: 24 }}>
              <h2 style={{ fontWeight: 700, color: "#1f2937", marginBottom: 16 }}>Cari Hotel</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: 10 }} className="grid-responsive4">
                <div><label style={{ fontSize: 11, color: "#9ca3af", display: "block", marginBottom: 4 }}>Kota Tujuan</label>
                  <input defaultValue="Bandung" style={{ border: "1px solid #e5e7eb", padding: "10px 12px", borderRadius: 10, fontSize: 13, width: "100%", boxSizing: "border-box" }} /></div>
                <div><label style={{ fontSize: 11, color: "#9ca3af", display: "block", marginBottom: 4 }}>Check-in</label>
                  <input type="date" style={{ border: "1px solid #e5e7eb", padding: "10px 12px", borderRadius: 10, fontSize: 13, width: "100%", boxSizing: "border-box" }} /></div>
                <div><label style={{ fontSize: 11, color: "#9ca3af", display: "block", marginBottom: 4 }}>Check-out</label>
                  <input type="date" style={{ border: "1px solid #e5e7eb", padding: "10px 12px", borderRadius: 10, fontSize: 13, width: "100%", boxSizing: "border-box" }} /></div>
                <div><label style={{ fontSize: 11, color: "transparent", display: "block", marginBottom: 4 }}>-</label>
                  <button style={{ background: PRIMARY, color: "#fff", border: "none", borderRadius: 10, padding: "10px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", width: "100%" }}>Cari Hotel →</button></div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
                {[["Semua",0],["⭐ Bintang 3+",1],["💰 < Rp500rb",2],["🅿️ Ada Parkir",3],["🍳 Sarapan",4]].map(([l,v]) => (
                  <button key={l} onClick={() => setStarFilter(v)} style={{
                    fontSize: 12, padding: "4px 14px", borderRadius: 99, border: `1px solid ${starFilter === v ? PRIMARY : "#e5e7eb"}`,
                    color: starFilter === v ? PRIMARY : "#6b7280", background: "#fff", cursor: "pointer"
                  }}>{l}</button>
                ))}
              </div>
            </div>

            {/* Hotel grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
              {shown.map(h => (
                <div key={h.id} style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", overflow: "hidden", transition: "transform .2s, box-shadow .2s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 32px rgba(0,0,0,.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,.07)"; }}>
                  <div style={{ background: `linear-gradient(135deg, ${PRIMARY}, #a78bfa)`, height: 80, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>{h.img}</div>
                  <div style={{ padding: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                      <div>
                        <div style={{ fontWeight: 700, color: "#1f2937", fontSize: 15 }}>{h.name}</div>
                        <div style={{ fontSize: 12, color: "#9ca3af" }}>📍 {h.city}</div>
                      </div>
                      <span style={{ color: ACCENT, fontSize: 13 }}>{"⭐".repeat(h.stars)}</span>
                    </div>
                    <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 10 }}>{h.desc}</div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                      {h.tags.map(t => <span key={t} style={{ fontSize: 11, background: "#f3f4f6", color: "#6b7280", padding: "2px 8px", borderRadius: 99 }}>{t}</span>)}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <span style={{ fontSize: 18, fontWeight: 700, color: PRIMARY }}>{fmt(h.price)}</span>
                        <span style={{ fontSize: 11, color: "#9ca3af" }}>/malam</span>
                      </div>
                      <button onClick={() => setBooked(h)} style={{ background: PRIMARY, color: "#fff", border: "none", borderRadius: 10, padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Pesan</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 22, color: "#1f2937" }}>Jadwal Perjalananmu</h2>
            {schedules.map(s => (
              <div key={s.id} style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", padding: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                <div>
                  <div style={{ fontWeight: 700, color: "#1f2937", fontSize: 16, marginBottom: 4 }}>🚉 {s.type}: {s.from} → {s.to}</div>
                  <div style={{ fontSize: 13, color: "#6b7280" }}>{s.date} · {s.time}</div>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 12, background: s.status === "Confirmed" ? "#dcfce7" : "#fef3c7", color: s.status === "Confirmed" ? "#166534" : "#92400e", padding: "4px 12px", borderRadius: 99, fontWeight: 600 }}>{s.status}</span>
                  <button style={{ border: `1px solid ${PRIMARY}`, color: PRIMARY, background: "#fff", borderRadius: 10, padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Ubah Jadwal</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {booked && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
          onClick={e => e.target === e.currentTarget && setBooked(null)}>
          <div style={{ background: "#fff", borderRadius: 24, padding: 28, maxWidth: 440, width: "100%", boxShadow: "0 30px 60px rgba(0,0,0,.3)" }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 20, marginBottom: 12 }}>Konfirmasi Booking</h3>
            <div style={{ background: "#f9fafb", borderRadius: 14, padding: 16, marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{booked.name}</div>
              <div style={{ fontSize: 13, color: "#6b7280" }}>📍 {booked.city} · {"⭐".repeat(booked.stars)}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: PRIMARY, marginTop: 8 }}>Rp {booked.price.toLocaleString("id-ID")}/malam</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
              <div><label style={{ fontSize: 12, color: "#9ca3af" }}>Check-in</label><input type="date" style={{ border: "1px solid #e5e7eb", padding: "8px 12px", borderRadius: 10, fontSize: 13, width: "100%", boxSizing: "border-box", marginTop: 4 }} /></div>
              <div><label style={{ fontSize: 12, color: "#9ca3af" }}>Check-out</label><input type="date" style={{ border: "1px solid #e5e7eb", padding: "8px 12px", borderRadius: 10, fontSize: 13, width: "100%", boxSizing: "border-box", marginTop: 4 }} /></div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setBooked(null)} style={{ flex: 1, border: "1px solid #e5e7eb", background: "#fff", color: "#6b7280", borderRadius: 12, padding: "12px 0", fontWeight: 600, cursor: "pointer" }}>Batal</button>
              <button onClick={() => { setBooked(null); setPage("payment"); }} style={{ flex: 2, background: PRIMARY, color: "#fff", border: "none", borderRadius: 12, padding: "12px 0", fontWeight: 600, cursor: "pointer" }}>Lanjut ke Pembayaran →</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
      <style>{`@media(max-width:768px){ .grid-responsive4{ grid-template-columns:1fr 1fr !important; } }`}</style>
    </div>
  );
}

// ─── Page: PAYMENT ─────────────────────────────────────────────────────────
function PaymentPage() {
  const [selectedBank, setSelectedBank] = useState(null);
  const [step, setStep] = useState(2);
  const [paid, setPaid] = useState(false);

  const banks = [
    { id: "bca", name: "BCA", bg: "linear-gradient(135deg,#005bac,#1976d2)", icon: "🏦" },
    { id: "mandiri", name: "Mandiri", bg: "linear-gradient(135deg,#003d7c,#0d6ca8)", icon: "🏛️" },
    { id: "bri", name: "BRI", bg: "linear-gradient(135deg,#005ca8,#1a78c2)", icon: "💳" },
    { id: "bni", name: "BNI", bg: "linear-gradient(135deg,#e65100,#f57c00)", icon: "🏧" },
    { id: "gopay", name: "GoPay", bg: "linear-gradient(135deg,#00aed6,#00c6f7)", icon: "📱" },
    { id: "seabank", name: "SeaBank", bg: "linear-gradient(135deg,#2e7d32,#43a047)", icon: "🌊" },
  ];

  const handlePay = () => {
    setStep(3);
    setTimeout(() => setPaid(true), 1200);
  };

  return (
    <div>
      <div style={{ background: `linear-gradient(135deg, ${PRIMARY}, #4f46e5)`, color: "#fff", padding: "40px 24px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: ACCENT, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 4, marginBottom: 8 }}>Pembayaran Aman</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 900 }}>Pembayaran</h1>
          {/* Steps */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 20 }}>
            {[1,2,3].map((s, i) => (
              <>
                <div key={s} style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700,
                  background: s < step ? "#22c55e" : s === step ? "#fff" : "rgba(255,255,255,.25)",
                  color: s < step ? "#fff" : s === step ? PRIMARY : "rgba(255,255,255,.7)" }}>
                  {s < step ? "✓" : s}
                </div>
                {i < 2 && <div style={{ width: 32, height: 2, background: s < step ? "#22c55e" : "rgba(255,255,255,.3)" }} />}
              </>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 60, marginTop: 6, fontSize: 11, color: "rgba(255,255,255,.6)" }}>
            <span>Detail</span><span>Pilih Bank</span><span>Bayar</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "32px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Order summary */}
        <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", padding: 20 }}>
          <h2 style={{ fontWeight: 700, color: "#1f2937", marginBottom: 14 }}>Ringkasan Pesanan</h2>
          {[["Item","Hotel Papandayan Bandung"],["Harga per malam","Rp 720.000"],["Biaya platform","Rp 5.000"]].map(([k,v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 8 }}>
              <span style={{ color: "#9ca3af" }}>{k}</span>
              <span style={{ color: "#1f2937", fontWeight: 500 }}>{v}</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: 10, display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
            <span style={{ color: "#1f2937" }}>Total</span>
            <span style={{ color: PRIMARY, fontSize: 18 }}>Rp 725.000</span>
          </div>
        </div>

        {/* Bank selection */}
        {!paid && (
          <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", padding: 20 }}>
            <h2 style={{ fontWeight: 700, color: "#1f2937", marginBottom: 16 }}>Pilih Metode Pembayaran</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              {banks.map(b => (
                <button key={b.id} onClick={() => setSelectedBank(b.id)} style={{
                  border: `2px solid ${selectedBank === b.id ? PRIMARY : "#e5e7eb"}`,
                  borderRadius: 16, padding: 16, cursor: "pointer", textAlign: "center",
                  background: selectedBank === b.id ? "#f5f3ff" : "#fff",
                  boxShadow: selectedBank === b.id ? `0 0 0 4px rgba(109,40,217,.1)` : "none",
                  transition: "all .2s"
                }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: b.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, margin: "0 auto 8px" }}>{b.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#1f2937" }}>{b.name}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* VA code or success */}
        {paid ? (
          <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", padding: 32, textAlign: "center" }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 24, color: "#1f2937", marginBottom: 8 }}>Pembayaran Berhasil!</h2>
            <p style={{ color: "#6b7280", fontSize: 14 }}>Booking Hotel Papandayan Bandung dikonfirmasi.</p>
            <div style={{ background: "#dcfce7", borderRadius: 14, padding: 12, margin: "16px 0", color: "#166534", fontWeight: 600, fontSize: 14 }}>
              🎉 Selamat menikmati mudikmu!
            </div>
          </div>
        ) : selectedBank && (
          <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,.07)", padding: 20 }}>
            <h2 style={{ fontWeight: 700, color: "#1f2937", marginBottom: 12 }}>Nomor Virtual Account</h2>
            <div style={{ background: "#f5f3ff", borderRadius: 14, padding: 16, textAlign: "center", marginBottom: 16 }}>
              <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6 }}>Nomor VA {selectedBank.toUpperCase()}</p>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 900, color: PRIMARY, letterSpacing: 4 }}>1234 5678 9012 3456</p>
            </div>
            <button onClick={handlePay} style={{ width: "100%", background: PRIMARY, color: "#fff", border: "none", borderRadius: 14, padding: "14px 0", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
              Konfirmasi Pembayaran →
            </button>
          </div>
        )}

        {!selectedBank && !paid && (
          <p style={{ textAlign: "center", fontSize: 13, color: "#9ca3af" }}>Pilih metode pembayaran di atas untuk melanjutkan.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

// ─── Shared: PageHeader ────────────────────────────────────────────────────
function PageHeader({ badge, title, sub }) {
  return (
    <div style={{ background: PRIMARY, color: "#fff", padding: "48px 24px" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <p style={{ color: ACCENT, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 4, marginBottom: 8 }}>{badge}</p>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 900 }}>{title}</h1>
        <p style={{ color: "rgba(255,255,255,.7)", marginTop: 8 }}>{sub}</p>
      </div>
    </div>
  );
}

// ─── Shared: Footer ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ textAlign: "center", fontSize: 13, color: "#9ca3af", padding: "32px 24px" }}>
      BalikKampung.id — Prototype Design Thinking Project
    </footer>
  );
}

// ─── APP ROOT ──────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":     return <HomePage setPage={setPage} />;
      case "planner":  return <PlannerPage setPage={setPage} />;
      case "budget":   return <BudgetPage />;
      case "features": return <FeaturesPage />;
      case "explore":  return <ExplorePage />;
      case "family":   return <FamilyPage />;
      case "hotel":    return <HotelPage setPage={setPage} />;
      case "payment":  return <PaymentPage />;
      default:         return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Navbar page={page} setPage={setPage} />
      {renderPage()}
    </div>
  );
}
