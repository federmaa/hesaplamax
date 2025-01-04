// Hesaplayıcı şablonları
const calculatorTemplates = {
    // Matematik Hesaplayıcıları
    'ebob-ekok': `
        <div class="calculator-card fade-in">
            <h2>EBOB EKOK Hesaplama</h2>
            <div class="mb-3">
                <label for="num1" class="form-label">1. Sayı</label>
                <input type="number" class="form-control" id="num1" required>
            </div>
            <div class="mb-3">
                <label for="num2" class="form-label">2. Sayı</label>
                <input type="number" class="form-control" id="num2" required>
            </div>
            <button class="btn btn-primary" onclick="calculateEbobEkok()">Hesapla</button>
            <div id="ebob-ekok-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'faktoriyel': `
        <div class="calculator-card fade-in">
            <h2>Faktöriyel Hesaplama</h2>
            <div class="mb-3">
                <label for="factorial-num" class="form-label">Sayı</label>
                <input type="number" class="form-control" id="factorial-num" required>
            </div>
            <button class="btn btn-primary" onclick="calculateFactorial()">Hesapla</button>
            <div id="factorial-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'kombinasyon': `
        <div class="calculator-card fade-in">
            <h2>Kombinasyon Hesaplama</h2>
            <div class="mb-3">
                <label for="n" class="form-label">n (Eleman Sayısı)</label>
                <input type="number" class="form-control" id="n" required>
            </div>
            <div class="mb-3">
                <label for="r" class="form-label">r (Seçilecek Eleman Sayısı)</label>
                <input type="number" class="form-control" id="r" required>
            </div>
            <button class="btn btn-primary" onclick="calculateCombination()">Hesapla</button>
            <div id="combination-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,

    // Finans Hesaplayıcıları
    'kredi': `
        <div class="calculator-card fade-in">
            <h2>Kredi Hesaplama</h2>
            <div class="mb-3">
                <label for="amount" class="form-label">Kredi Tutarı (TL)</label>
                <input type="number" class="form-control" id="amount" required>
            </div>
            <div class="mb-3">
                <label for="interest" class="form-label">Faiz Oranı (%)</label>
                <input type="number" class="form-control" id="interest" step="0.01" required>
            </div>
            <div class="mb-3">
                <label for="term" class="form-label">Vade (Ay)</label>
                <input type="number" class="form-control" id="term" required>
            </div>
            <button class="btn btn-primary" onclick="calculateLoan()">Hesapla</button>
            <div id="loan-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'kdv': `
        <div class="calculator-card fade-in">
            <h2>KDV Hesaplama</h2>
            <div class="mb-3">
                <label for="price" class="form-label">Fiyat (TL)</label>
                <input type="number" class="form-control" id="price" required>
            </div>
            <div class="mb-3">
                <label for="vat-rate" class="form-label">KDV Oranı (%)</label>
                <select class="form-control" id="vat-rate">
                    <option value="20">%20 (Genel)</option>
                    <option value="10">%10 (İndirimli)</option>
                    <option value="1">%1 (Özel)</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="calculateVAT()">Hesapla</button>
            <div id="vat-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,

    // Sağlık Hesaplayıcıları
    'vki': `
        <div class="calculator-card fade-in">
            <h2>Vücut Kitle İndeksi Hesaplama</h2>
            <div class="mb-3">
                <label for="weight" class="form-label">Kilo (kg)</label>
                <input type="number" class="form-control" id="weight" required>
            </div>
            <div class="mb-3">
                <label for="height" class="form-label">Boy (cm)</label>
                <input type="number" class="form-control" id="height" required>
            </div>
            <button class="btn btn-primary" onclick="calculateBMI()">Hesapla</button>
            <div id="bmi-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'kalori': `
        <div class="calculator-card fade-in">
            <h2>Günlük Kalori İhtiyacı Hesaplama</h2>
            <div class="mb-3">
                <label for="cal-weight" class="form-label">Kilo (kg)</label>
                <input type="number" class="form-control" id="cal-weight" required>
            </div>
            <div class="mb-3">
                <label for="cal-height" class="form-label">Boy (cm)</label>
                <input type="number" class="form-control" id="cal-height" required>
            </div>
            <div class="mb-3">
                <label for="cal-age" class="form-label">Yaş</label>
                <input type="number" class="form-control" id="cal-age" required>
            </div>
            <div class="mb-3">
                <label for="cal-gender" class="form-label">Cinsiyet</label>
                <select class="form-control" id="cal-gender">
                    <option value="male">Erkek</option>
                    <option value="female">Kadın</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="cal-activity" class="form-label">Aktivite Seviyesi</label>
                <select class="form-control" id="cal-activity">
                    <option value="1.2">Hareketsiz</option>
                    <option value="1.375">Az Hareketli</option>
                    <option value="1.55">Orta Derece Hareketli</option>
                    <option value="1.725">Çok Hareketli</option>
                    <option value="1.9">Aşırı Hareketli</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="calculateCalories()">Hesapla</button>
            <div id="calories-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,

    // Zaman Hesaplayıcıları
    'yas': `
        <div class="calculator-card fade-in">
            <h2>Yaş Hesaplama</h2>
            <div class="mb-3">
                <label for="birthdate" class="form-label">Doğum Tarihi</label>
                <input type="date" class="form-control" id="birthdate" required>
            </div>
            <button class="btn btn-primary" onclick="calculateAge()">Hesapla</button>
            <div id="age-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'tarih-fark': `
        <div class="calculator-card fade-in">
            <h2>Tarih Farkı Hesaplama</h2>
            <div class="mb-3">
                <label for="date1" class="form-label">1. Tarih</label>
                <input type="date" class="form-control" id="date1" required>
            </div>
            <div class="mb-3">
                <label for="date2" class="form-label">2. Tarih</label>
                <input type="date" class="form-control" id="date2" required>
            </div>
            <button class="btn btn-primary" onclick="calculateDateDifference()">Hesapla</button>
            <div id="date-diff-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,

    // Geometri Hesaplayıcıları
    'alan': `
        <div class="calculator-card fade-in">
            <h2>Alan Hesaplama</h2>
            <div class="mb-3">
                <label for="shape" class="form-label">Şekil Seçin</label>
                <select class="form-control" id="shape" onchange="updateAreaInputs()">
                    <option value="square">Kare</option>
                    <option value="rectangle">Dikdörtgen</option>
                    <option value="triangle">Üçgen</option>
                    <option value="circle">Daire</option>
                </select>
            </div>
            <div id="area-inputs">
                <!-- Dinamik olarak güncellenecek -->
            </div>
            <button class="btn btn-primary" onclick="calculateArea()">Hesapla</button>
            <div id="area-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'cevre': `
        <div class="calculator-card fade-in">
            <h2>Çevre Hesaplama</h2>
            <div class="mb-3">
                <label for="perimeter-shape" class="form-label">Şekil Seçin</label>
                <select class="form-control" id="perimeter-shape" onchange="updatePerimeterInputs()">
                    <option value="square">Kare</option>
                    <option value="rectangle">Dikdörtgen</option>
                    <option value="triangle">Üçgen</option>
                    <option value="circle">Daire</option>
                </select>
            </div>
            <div id="perimeter-inputs">
                <!-- Dinamik olarak güncellenecek -->
            </div>
            <button class="btn btn-primary" onclick="calculatePerimeter()">Hesapla</button>
            <div id="perimeter-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'hacim': `
        <div class="calculator-card fade-in">
            <h2>Hacim Hesaplama</h2>
            <div class="mb-3">
                <label for="volume-shape" class="form-label">Cisim Seçin</label>
                <select class="form-control" id="volume-shape" onchange="updateVolumeInputs()">
                    <option value="cube">Küp</option>
                    <option value="rectangular-prism">Dikdörtgen Prizma</option>
                    <option value="cylinder">Silindir</option>
                    <option value="sphere">Küre</option>
                </select>
            </div>
            <div id="volume-inputs">
                <!-- Dinamik olarak güncellenecek -->
            </div>
            <button class="btn btn-primary" onclick="calculateVolume()">Hesapla</button>
            <div id="volume-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,

    // Eğitim Hesaplayıcıları
    'not-ortalama': `
        <div class="calculator-card fade-in">
            <h2>Not Ortalaması Hesaplama</h2>
            <div id="grades-container">
                <div class="mb-3">
                    <label class="form-label">1. Ders</label>
                    <div class="row">
                        <div class="col-md-8">
                            <input type="text" class="form-control" placeholder="Ders Adı" data-grade-name="1">
                        </div>
                        <div class="col-md-4">
                            <input type="number" class="form-control" placeholder="Not" min="0" max="100" data-grade-value="1">
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-secondary mb-3" onclick="addGradeInput()">+ Ders Ekle</button>
            <button class="btn btn-primary" onclick="calculateGradeAverage()">Hesapla</button>
            <div id="grade-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'takdir-tesekkur': `
        <div class="calculator-card fade-in">
            <h2>Takdir Teşekkür Hesaplama</h2>
            <div class="mb-3">
                <label class="form-label">Davranış Notu</label>
                <select class="form-control" id="behavior-grade">
                    <option value="100">Çok İyi</option>
                    <option value="85">İyi</option>
                    <option value="70">Orta</option>
                    <option value="55">Geçer</option>
                </select>
            </div>
            <div id="course-grades-container">
                <div class="mb-3">
                    <label class="form-label">1. Ders</label>
                    <div class="row">
                        <div class="col-md-8">
                            <input type="text" class="form-control" placeholder="Ders Adı" data-course-name="1">
                        </div>
                        <div class="col-md-4">
                            <input type="number" class="form-control" placeholder="Not" min="0" max="100" data-course-grade="1">
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-secondary mb-3" onclick="addCourseInput()">+ Ders Ekle</button>
            <button class="btn btn-primary" onclick="calculateHonorCertificate()">Hesapla</button>
            <div id="certificate-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'universite-puan': `
        <div class="calculator-card fade-in">
            <h2>Üniversite Puanı Hesaplama</h2>
            <div class="mb-3">
                <label class="form-label">TYT Netleri</label>
                <div class="row mb-2">
                    <div class="col-md-6">
                        <input type="number" class="form-control" id="turkish-net" placeholder="Türkçe Net" step="0.25">
                    </div>
                    <div class="col-md-6">
                        <input type="number" class="form-control" id="math-net" placeholder="Matematik Net" step="0.25">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <input type="number" class="form-control" id="social-net" placeholder="Sosyal Net" step="0.25">
                    </div>
                    <div class="col-md-6">
                        <input type="number" class="form-control" id="science-net" placeholder="Fen Net" step="0.25">
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Diploma Notu</label>
                <input type="number" class="form-control" id="diploma-grade" placeholder="Diploma Notu" step="0.01">
            </div>
            <button class="btn btn-primary" onclick="calculateUniversityScore()">Hesapla</button>
            <div id="university-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'kok': `
        <div class="calculator-card fade-in">
            <h2>Köklü Sayı Hesaplama</h2>
            <div class="mb-3">
                <label for="root-number" class="form-label">Sayı</label>
                <input type="number" class="form-control" id="root-number" required>
            </div>
            <div class="mb-3">
                <label for="root-power" class="form-label">Kök Derecesi</label>
                <input type="number" class="form-control" id="root-power" value="2" required>
            </div>
            <button class="btn btn-primary" onclick="calculateRoot()">Hesapla</button>
            <div id="root-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'uslu': `
        <div class="calculator-card fade-in">
            <h2>Üslü Sayı Hesaplama</h2>
            <div class="mb-3">
                <label for="power-base" class="form-label">Taban</label>
                <input type="number" class="form-control" id="power-base" required>
            </div>
            <div class="mb-3">
                <label for="power-exp" class="form-label">Üs</label>
                <input type="number" class="form-control" id="power-exp" required>
            </div>
            <button class="btn btn-primary" onclick="calculatePower()">Hesapla</button>
            <div id="power-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'permutasyon': `
        <div class="calculator-card fade-in">
            <h2>Permütasyon Hesaplama</h2>
            <div class="mb-3">
                <label for="perm-n" class="form-label">n (Eleman Sayısı)</label>
                <input type="number" class="form-control" id="perm-n" required>
            </div>
            <div class="mb-3">
                <label for="perm-r" class="form-label">r (Seçilecek Eleman Sayısı)</label>
                <input type="number" class="form-control" id="perm-r" required>
            </div>
            <button class="btn btn-primary" onclick="calculatePermutation()">Hesapla</button>
            <div id="permutation-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'mod': `
        <div class="calculator-card fade-in">
            <h2>Modüler Aritmetik Hesaplama</h2>
            <div class="mb-3">
                <label for="mod-number" class="form-label">Sayı</label>
                <input type="number" class="form-control" id="mod-number" required>
            </div>
            <div class="mb-3">
                <label for="mod-base" class="form-label">Mod Tabanı</label>
                <input type="number" class="form-control" id="mod-base" required>
            </div>
            <button class="btn btn-primary" onclick="calculateMod()">Hesapla</button>
            <div id="mod-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'faiz': `
        <div class="calculator-card fade-in">
            <h2>Faiz Hesaplama</h2>
            <div class="mb-3">
                <label for="interest-amount" class="form-label">Ana Para (TL)</label>
                <input type="number" class="form-control" id="interest-amount" required>
            </div>
            <div class="mb-3">
                <label for="interest-rate" class="form-label">Faiz Oranı (%)</label>
                <input type="number" class="form-control" id="interest-rate" step="0.01" required>
            </div>
            <div class="mb-3">
                <label for="interest-period" class="form-label">Vade (Ay)</label>
                <input type="number" class="form-control" id="interest-period" required>
            </div>
            <div class="mb-3">
                <label for="interest-type" class="form-label">Faiz Türü</label>
                <select class="form-control" id="interest-type">
                    <option value="simple">Basit Faiz</option>
                    <option value="compound">Bileşik Faiz</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="calculateInterest()">Hesapla</button>
            <div id="interest-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'maas': `
        <div class="calculator-card fade-in">
            <h2>Maaş Hesaplama</h2>
            <div class="mb-3">
                <label for="gross-salary" class="form-label">Brüt Maaş (TL)</label>
                <input type="number" class="form-control" id="gross-salary" required>
            </div>
            <div class="mb-3">
                <label for="salary-year" class="form-label">Yıl</label>
                <select class="form-control" id="salary-year">
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="calculateSalary()">Hesapla</button>
            <div id="salary-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'kira-gelir': `
        <div class="calculator-card fade-in">
            <h2>Kira Gelir Vergisi Hesaplama</h2>
            <div class="mb-3">
                <label for="rental-income" class="form-label">Yıllık Kira Geliri (TL)</label>
                <input type="number" class="form-control" id="rental-income" required>
            </div>
            <div class="mb-3">
                <label for="rental-year" class="form-label">Yıl</label>
                <select class="form-control" id="rental-year">
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="calculateRentalIncome()">Hesapla</button>
            <div id="rental-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'ideal-kilo': `
        <div class="calculator-card fade-in">
            <h2>İdeal Kilo Hesaplama</h2>
            <div class="mb-3">
                <label for="ideal-height" class="form-label">Boy (cm)</label>
                <input type="number" class="form-control" id="ideal-height" required>
            </div>
            <div class="mb-3">
                <label for="ideal-gender" class="form-label">Cinsiyet</label>
                <select class="form-control" id="ideal-gender">
                    <option value="male">Erkek</option>
                    <option value="female">Kadın</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="ideal-frame" class="form-label">Vücut Yapısı</label>
                <select class="form-control" id="ideal-frame">
                    <option value="small">İnce Kemikli</option>
                    <option value="medium">Orta Kemikli</option>
                    <option value="large">Geniş Kemikli</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="calculateIdealWeight()">Hesapla</button>
            <div id="ideal-weight-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'protein': `
        <div class="calculator-card fade-in">
            <h2>Günlük Protein İhtiyacı Hesaplama</h2>
            <div class="mb-3">
                <label for="protein-weight" class="form-label">Kilo (kg)</label>
                <input type="number" class="form-control" id="protein-weight" required>
            </div>
            <div class="mb-3">
                <label for="protein-activity" class="form-label">Aktivite Seviyesi</label>
                <select class="form-control" id="protein-activity">
                    <option value="sedentary">Hareketsiz</option>
                    <option value="moderate">Orta derece aktif yaşam tarzı için önerilen protein miktarı</option>
                    <option value="active">Çok Aktif yaşam tarzı ve düzenli egzersiz için önerilen protein miktarı</option>
                    <option value="athlete">Yoğun antrenman yapan sporcular için önerilen protein miktarı</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="calculateProtein()">Hesapla</button>
            <div id="protein-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'yag-orani': `
        <div class="calculator-card fade-in">
            <h2>Vücut Yağ Oranı Hesaplama</h2>
            <div class="mb-3">
                <label for="fat-weight" class="form-label">Kilo (kg)</label>
                <input type="number" class="form-control" id="fat-weight" required>
            </div>
            <div class="mb-3">
                <label for="fat-height" class="form-label">Boy (cm)</label>
                <input type="number" class="form-control" id="fat-height" required>
            </div>
            <div class="mb-3">
                <label for="fat-age" class="form-label">Yaş</label>
                <input type="number" class="form-control" id="fat-age" required>
            </div>
            <div class="mb-3">
                <label for="fat-gender" class="form-label">Cinsiyet</label>
                <select class="form-control" id="fat-gender">
                    <option value="male">Erkek</option>
                    <option value="female">Kadın</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="fat-neck" class="form-label">Boyun Çevresi (cm)</label>
                <input type="number" class="form-control" id="fat-neck" required>
            </div>
            <div class="mb-3">
                <label for="fat-waist" class="form-label">Bel Çevresi (cm)</label>
                <input type="number" class="form-control" id="fat-waist" required>
            </div>
            <div class="mb-3" id="fat-hip-div" style="display: none;">
                <label for="fat-hip" class="form-label">Kalça Çevresi (cm)</label>
                <input type="number" class="form-control" id="fat-hip">
            </div>
            <button class="btn btn-primary" onclick="calculateBodyFat()">Hesapla</button>
            <div id="body-fat-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'is-gunu': `
        <div class="calculator-card fade-in">
            <h2>İş Günü Hesaplama</h2>
            <div class="mb-3">
                <label for="work-start-date" class="form-label">Başlangıç Tarihi</label>
                <input type="date" class="form-control" id="work-start-date" required>
            </div>
            <div class="mb-3">
                <label for="work-end-date" class="form-label">Bitiş Tarihi</label>
                <input type="date" class="form-control" id="work-end-date" required>
            </div>
            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="include-saturday">
                    <label class="form-check-label" for="include-saturday">
                        Cumartesi Günlerini Dahil Et
                    </label>
                </div>
            </div>
            <button class="btn btn-primary" onclick="calculateWorkDays()">Hesapla</button>
            <div id="work-days-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'ramadan': `
        <div class="calculator-card fade-in">
            <h2>Ramazan Günü Hesaplama</h2>
            <div class="mb-3">
                <label for="ramadan-year" class="form-label">Yıl</label>
                <select class="form-control" id="ramadan-year">
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="calculateRamadan()">Hesapla</button>
            <div id="ramadan-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'yakit': `
        <div class="calculator-card fade-in">
            <h2>Yakıt Hesaplama</h2>
            <div class="mb-3">
                <label for="mesafe" class="form-label">Mesafe (km)</label>
                <input type="number" class="form-control" id="mesafe" required>
            </div>
            <div class="mb-3">
                <label for="tuketim" class="form-label">100 km'de tüketim (lt)</label>
                <input type="number" class="form-control" id="tuketim" required>
            </div>
            <div class="mb-3">
                <label for="yakit-fiyat" class="form-label">Yakıt fiyatı (TL)</label>
                <input type="number" class="form-control" id="yakit-fiyat" required>
            </div>
            <button class="btn btn-primary" onclick="hesaplaYakit()">Hesapla</button>
            <div id="yakit-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'mesafe': `
        <div class="calculator-card fade-in">
            <h2>Mesafe Hesaplama</h2>
            <div class="mb-3">
                <label for="hiz" class="form-label">Ortalama hız (km/sa)</label>
                <input type="number" class="form-control" id="hiz" required>
            </div>
            <div class="mb-3">
                <label for="sure" class="form-label">Süre (saat)</label>
                <input type="number" class="form-control" id="sure" required>
            </div>
            <button class="btn btn-primary" onclick="hesaplaMesafe()">Hesapla</button>
            <div id="mesafe-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'mtv': `
        <div class="calculator-card fade-in">
            <h2>MTV Hesaplama</h2>
            <div class="mb-3">
                <label for="arac-tipi" class="form-label">Araç Tipi</label>
                <select class="form-control" id="arac-tipi">
                    <option value="">Araç Tipi Seçin</option>
                    <option value="otomobil">Otomobil</option>
                    <option value="minibus">Minibüs</option>
                    <option value="otobus">Otobüs</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="motor-hacmi" class="form-label">Motor Hacmi (cc)</label>
                <input type="number" class="form-control" id="motor-hacmi" required>
            </div>
            <div class="mb-3">
                <label for="yas" class="form-label">Araç Yaşı</label>
                <input type="number" class="form-control" id="yas" required>
            </div>
            <button class="btn btn-primary" onclick="hesaplaMTV()">Hesapla</button>
            <div id="mtv-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'max-nabiz': `
        <div class="calculator-card fade-in">
            <h2>Maksimum Nabız Hesaplama</h2>
            <div class="mb-3">
                <label for="yas" class="form-label">Yaşınız</label>
                <input type="number" class="form-control" id="yas" required>
            </div>
            <div class="mb-3">
                <label for="aktivite-seviyesi" class="form-label">Aktivite Seviyesi</label>
                <select class="form-control" id="aktivite-seviyesi">
                    <option value="">Aktivite Seviyesi</option>
                    <option value="dusuk">Düşük</option>
                    <option value="orta">Orta</option>
                    <option value="yuksek">Yüksek</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="hesaplaMaxNabiz()">Hesapla</button>
            <div id="max-nabiz-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'kalori-yakim': `
        <div class="calculator-card fade-in">
            <h2>Kalori Yakım Hesaplama</h2>
            <div class="mb-3">
                <label for="kilo" class="form-label">Kilonuz (kg)</label>
                <input type="number" class="form-control" id="kilo" required>
            </div>
            <div class="mb-3">
                <label for="aktivite" class="form-label">Aktivite</label>
                <select class="form-control" id="aktivite">
                    <option value="">Aktivite Seçin</option>
                    <option value="yuruyus">Yürüyüş</option>
                    <option value="kosu">Koşu</option>
                    <option value="bisiklet">Bisiklet</option>
                    <option value="yuzme">Yüzme</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="sure" class="form-label">Süre (dakika)</label>
                <input type="number" class="form-control" id="sure" required>
            </div>
            <button class="btn btn-primary" onclick="hesaplaKaloriYakim()">Hesapla</button>
            <div id="kalori-yakim-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'taksit-kira': `
        <div class="calculator-card fade-in">
            <h2>Taksit/Kira Hesaplama</h2>
            <div class="mb-3">
                <label for="aylik-gelir" class="form-label">Aylık Net Gelir (TL)</label>
                <input type="number" class="form-control" id="aylik-gelir" required>
            </div>
            <div class="mb-3">
                <label for="taksit" class="form-label">Aylık Taksit/Kira (TL)</label>
                <input type="number" class="form-control" id="taksit" required>
            </div>
            <button class="btn btn-primary" onclick="hesaplaTaksitKira()">Hesapla</button>
            <div id="taksit-kira-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'emlak-vergi': `
        <div class="calculator-card fade-in">
            <h2>Emlak Vergisi Hesaplama</h2>
            <div class="mb-3">
                <label for="rayic-bedel" class="form-label">Rayiç Bedel (TL)</label>
                <input type="number" class="form-control" id="rayic-bedel" required>
            </div>
            <div class="mb-3">
                <label for="emlak-tipi" class="form-label">Emlak Tipi</label>
                <select class="form-control" id="emlak-tipi">
                    <option value="">Emlak Tipi</option>
                    <option value="konut">Konut</option>
                    <option value="isyeri">İşyeri</option>
                    <option value="arsa">Arsa</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="hesaplaEmlakVergi()">Hesapla</button>
            <div id="emlak-vergi-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'mesai': `
        <div class="calculator-card fade-in">
            <h2>Mesai Ücreti Hesaplama</h2>
            <div class="mb-3">
                <label for="saat-ucret" class="form-label">Saat Ücreti (TL)</label>
                <input type="number" class="form-control" id="saat-ucret" required>
            </div>
            <div class="mb-3">
                <label for="mesai-saat" class="form-label">Mesai Saati</label>
                <input type="number" class="form-control" id="mesai-saat" required>
            </div>
            <div class="mb-3">
                <label for="mesai-tipi" class="form-label">Mesai Tipi</label>
                <select class="form-control" id="mesai-tipi">
                    <option value="">Mesai Tipi</option>
                    <option value="hafta-ici">Hafta İçi</option>
                    <option value="hafta-sonu">Hafta Sonu</option>
                    <option value="tatil">Resmi Tatil</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="hesaplaMesai()">Hesapla</button>
            <div id="mesai-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'kidem': `
        <div class="calculator-card fade-in">
            <h2>Kıdem Tazminatı Hesaplama</h2>
            <div class="mb-3">
                <label for="calisma-yil" class="form-label">Çalışma Yılı</label>
                <input type="number" class="form-control" id="calisma-yil" required>
            </div>
            <div class="mb-3">
                <label for="brut-ucret" class="form-label">Brüt Ücret (TL)</label>
                <input type="number" class="form-control" id="brut-ucret" required>
            </div>
            <button class="btn btn-primary" onclick="hesaplaKidem()">Hesapla</button>
            <div id="kidem-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'para-birimi': `
        <div class="calculator-card fade-in">
            <h2>Para Birimi Dönüştürme</h2>
            <div class="mb-3">
                <label for="miktar" class="form-label">Miktar</label>
                <input type="number" class="form-control" id="miktar" required>
            </div>
            <div class="mb-3">
                <label for="kaynak-birim" class="form-label">Kaynak Para Birimi</label>
                <select class="form-control" id="kaynak-birim">
                    <option value="">Kaynak Para Birimi</option>
                    <option value="TRY">TL</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="hedef-birim" class="form-label">Hedef Para Birimi</label>
                <select class="form-control" id="hedef-birim">
                    <option value="">Hedef Para Birimi</option>
                    <option value="TRY">TL</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="hesaplaParaBirimi()">Hesapla</button>
            <div id="para-birimi-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'deger-kaybi': `
        <div class="calculator-card fade-in">
            <h2>Araç Değer Kaybı Hesaplama</h2>
            <div class="mb-3">
                <label for="arac-deger" class="form-label">Araç Değeri (TL)</label>
                <input type="number" class="form-control" id="arac-deger" required>
            </div>
            <div class="mb-3">
                <label for="arac-yas" class="form-label">Araç Yaşı</label>
                <input type="number" class="form-control" id="arac-yas" required>
            </div>
            <div class="mb-3">
                <label for="kaza-durum" class="form-label">Kaza Durumu</label>
                <select class="form-control" id="kaza-durum">
                    <option value="yok">Kazasız</option>
                    <option value="hafif">Hafif Hasarlı</option>
                    <option value="orta">Orta Hasarlı</option>
                    <option value="agir">Ağır Hasarlı</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="hesaplaDegerKaybi()">Hesapla</button>
            <div id="deger-kaybi-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'lpg': `
        <div class="calculator-card fade-in">
            <h2>LPG Tasarruf Hesaplama</h2>
            <div class="mb-3">
                <label for="aylik-km" class="form-label">Aylık Ortalama KM</label>
                <input type="number" class="form-control" id="aylik-km" required>
            </div>
            <div class="mb-3">
                <label for="benzin-tuketim" class="form-label">100 km'de Benzin Tüketimi (lt)</label>
                <input type="number" class="form-control" id="benzin-tuketim" required>
            </div>
            <div class="mb-3">
                <label for="benzin-fiyat" class="form-label">Benzin Fiyatı (TL/lt)</label>
                <input type="number" class="form-control" id="benzin-fiyat" required>
            </div>
            <div class="mb-3">
                <label for="lpg-fiyat" class="form-label">LPG Fiyatı (TL/lt)</label>
                <input type="number" class="form-control" id="lpg-fiyat" required>
            </div>
            <button class="btn btn-primary" onclick="hesaplaLPG()">Hesapla</button>
            <div id="lpg-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'yalitim': `
        <div class="calculator-card fade-in">
            <h2>Yalıtım Tasarrufu Hesaplama</h2>
            <div class="mb-3">
                <label for="ev-alan" class="form-label">Ev Alanı (m²)</label>
                <input type="number" class="form-control" id="ev-alan" required>
            </div>
            <div class="mb-3">
                <label for="yakit-tip" class="form-label">Yakıt Tipi</label>
                <select class="form-control" id="yakit-tip">
                    <option value="dogalgaz">Doğalgaz</option>
                    <option value="komur">Kömür</option>
                    <option value="elektrik">Elektrik</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="yillik-tuketim" class="form-label">Yıllık Tüketim (TL)</label>
                <input type="number" class="form-control" id="yillik-tuketim" required>
            </div>
            <button class="btn btn-primary" onclick="hesaplaYalitim()">Hesapla</button>
            <div id="yalitim-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'tapu': `
        <div class="calculator-card fade-in">
            <h2>Tapu Harcı Hesaplama</h2>
            <div class="mb-3">
                <label for="gayrimenkul-deger" class="form-label">Gayrimenkul Değeri (TL)</label>
                <input type="number" class="form-control" id="gayrimenkul-deger" required>
            </div>
            <div class="mb-3">
                <label for="islem-tip" class="form-label">İşlem Tipi</label>
                <select class="form-control" id="islem-tip">
                    <option value="satis">Satış</option>
                    <option value="ipotek">İpotek</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="hesaplaTapu()">Hesapla</button>
            <div id="tapu-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'komisyon': `
        <div class="calculator-card fade-in">
            <h2>Emlak Komisyonu Hesaplama</h2>
            <div class="mb-3">
                <label for="emlak-deger" class="form-label">Emlak Değeri (TL)</label>
                <input type="number" class="form-control" id="emlak-deger" required>
            </div>
            <div class="mb-3">
                <label for="komisyon-oran" class="form-label">Komisyon Oranı (%)</label>
                <input type="number" class="form-control" id="komisyon-oran" value="2" required>
            </div>
            <button class="btn btn-primary" onclick="hesaplaKomisyon()">Hesapla</button>
            <div id="komisyon-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'ihbar': `
        <div class="calculator-card fade-in">
            <h2>İhbar Tazminatı Hesaplama</h2>
            <div class="mb-3">
                <label for="calisma-suresi" class="form-label">Çalışma Süresi (Yıl)</label>
                <input type="number" class="form-control" id="calisma-suresi" required>
            </div>
            <div class="mb-3">
                <label for="aylik-ucret" class="form-label">Aylık Brüt Ücret (TL)</label>
                <input type="number" class="form-control" id="aylik-ucret" required>
            </div>
            <button class="btn btn-primary" onclick="hesaplaIhbar()">Hesapla</button>
            <div id="ihbar-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'emeklilik': `
        <div class="calculator-card fade-in">
            <h2>Emeklilik Hesaplama</h2>
            <div class="mb-3">
                <label for="dogum-tarihi" class="form-label">Doğum Tarihi</label>
                <input type="date" class="form-control" id="dogum-tarihi" required>
            </div>
            <div class="mb-3">
                <label for="cinsiyet" class="form-label">Cinsiyet</label>
                <select class="form-control" id="cinsiyet">
                    <option value="erkek">Erkek</option>
                    <option value="kadin">Kadın</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="ise-baslama" class="form-label">İşe Başlama Tarihi</label>
                <input type="date" class="form-control" id="ise-baslama" required>
            </div>
            <button class="btn btn-primary" onclick="hesaplaEmeklilik()">Hesapla</button>
            <div id="emeklilik-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'sicaklik': `
        <div class="calculator-card fade-in">
            <h2>Sıcaklık Dönüştürme</h2>
            <div class="mb-3">
                <label for="sicaklik-deger" class="form-label">Sıcaklık Değeri</label>
                <input type="number" class="form-control" id="sicaklik-deger" required>
            </div>
            <div class="mb-3">
                <label for="kaynak-birim" class="form-label">Kaynak Birim</label>
                <select class="form-control" id="sicaklik-kaynak">
                    <option value="celsius">Celsius (°C)</option>
                    <option value="fahrenheit">Fahrenheit (°F)</option>
                    <option value="kelvin">Kelvin (K)</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="hedef-birim" class="form-label">Hedef Birim</label>
                <select class="form-control" id="sicaklik-hedef">
                    <option value="celsius">Celsius (°C)</option>
                    <option value="fahrenheit">Fahrenheit (°F)</option>
                    <option value="kelvin">Kelvin (K)</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="hesaplaSicaklik()">Hesapla</button>
            <div id="sicaklik-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'uzunluk': `
        <div class="calculator-card fade-in">
            <h2>Uzunluk Dönüştürme</h2>
            <div class="mb-3">
                <label for="uzunluk-deger" class="form-label">Uzunluk Değeri</label>
                <input type="number" class="form-control" id="uzunluk-deger" required>
            </div>
            <div class="mb-3">
                <label for="uzunluk-kaynak" class="form-label">Kaynak Birim</label>
                <select class="form-control" id="uzunluk-kaynak">
                    <option value="metre">Metre (m)</option>
                    <option value="kilometre">Kilometre (km)</option>
                    <option value="santimetre">Santimetre (cm)</option>
                    <option value="milimetre">Milimetre (mm)</option>
                    <option value="inch">İnç (in)</option>
                    <option value="feet">Fit (ft)</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="uzunluk-hedef" class="form-label">Hedef Birim</label>
                <select class="form-control" id="uzunluk-hedef">
                    <option value="metre">Metre (m)</option>
                    <option value="kilometre">Kilometre (km)</option>
                    <option value="santimetre">Santimetre (cm)</option>
                    <option value="milimetre">Milimetre (mm)</option>
                    <option value="inch">İnç (in)</option>
                    <option value="feet">Fit (ft)</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="hesaplaUzunluk()">Hesapla</button>
            <div id="uzunluk-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'agirlik': `
        <div class="calculator-card fade-in">
            <h2>Ağırlık Dönüştürme</h2>
            <div class="mb-3">
                <label for="agirlik-deger" class="form-label">Ağırlık Değeri</label>
                <input type="number" class="form-control" id="agirlik-deger" required>
            </div>
            <div class="mb-3">
                <label for="agirlik-kaynak" class="form-label">Kaynak Birim</label>
                <select class="form-control" id="agirlik-kaynak">
                    <option value="kilogram">Kilogram (kg)</option>
                    <option value="gram">Gram (g)</option>
                    <option value="miligram">Miligram (mg)</option>
                    <option value="pound">Pound (lb)</option>
                    <option value="ounce">Ons (oz)</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="agirlik-hedef" class="form-label">Hedef Birim</label>
                <select class="form-control" id="agirlik-hedef">
                    <option value="kilogram">Kilogram (kg)</option>
                    <option value="gram">Gram (g)</option>
                    <option value="miligram">Miligram (mg)</option>
                    <option value="pound">Pound (lb)</option>
                    <option value="ounce">Ons (oz)</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="hesaplaAgirlik()">Hesapla</button>
            <div id="agirlik-result" class="result mt-3" style="display: none;"></div>
        </div>
    `,
    'dijital': `
        <div class="calculator-card fade-in">
            <h2>Dijital Birim Dönüştürme</h2>
            <div class="mb-3">
                <label for="dijital-deger" class="form-label">Değer</label>
                <input type="number" class="form-control" id="dijital-deger" required>
            </div>
            <div class="mb-3">
                <label for="dijital-kaynak" class="form-label">Kaynak Birim</label>
                <select class="form-control" id="dijital-kaynak">
                    <option value="byte">Byte (B)</option>
                    <option value="kilobyte">Kilobyte (KB)</option>
                    <option value="megabyte">Megabyte (MB)</option>
                    <option value="gigabyte">Gigabyte (GB)</option>
                    <option value="terabyte">Terabyte (TB)</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="dijital-hedef" class="form-label">Hedef Birim</label>
                <select class="form-control" id="dijital-hedef">
                    <option value="byte">Byte (B)</option>
                    <option value="kilobyte">Kilobyte (KB)</option>
                    <option value="megabyte">Megabyte (MB)</option>
                    <option value="gigabyte">Gigabyte (GB)</option>
                    <option value="terabyte">Terabyte (TB)</option>
                </select>
            </div>
            <button class="btn btn-primary" onclick="hesaplaDijital()">Hesapla</button>
            <div id="dijital-result" class="result mt-3" style="display: none;"></div>
        </div>
    `
};

// Hesaplayıcı fonksiyonları
function calculateEbobEkok() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        alert('Lütfen geçerli pozitif sayılar giriniz.');
        return;
    }

    const gcd = (a, b) => {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

    const ebob = gcd(num1, num2);
    const ekok = lcm(num1, num2);

    const resultDiv = document.getElementById('ebob-ekok-result');
    resultDiv.innerHTML = `
        <h4>Sonuçlar:</h4>
        <p>EBOB(${num1}, ${num2}) = ${ebob}</p>
        <p>EKOK(${num1}, ${num2}) = ${ekok}</p>
    `;
    resultDiv.style.display = 'block';
}

function calculateFactorial() {
    const num = parseInt(document.getElementById('factorial-num').value);
    
    if (isNaN(num) || num < 0) {
        alert('Lütfen geçerli bir pozitif sayı giriniz.');
        return;
    }

    const factorial = n => {
        if (n === 0) return 1;
        return n * factorial(n - 1);
    };

    const result = factorial(num);
    const resultDiv = document.getElementById('factorial-result');
    resultDiv.innerHTML = `
        <h4>Sonuç:</h4>
        <p>${num}! = ${result}</p>
    `;
    resultDiv.style.display = 'block';
}

function calculateCombination() {
    const n = parseInt(document.getElementById('n').value);
    const r = parseInt(document.getElementById('r').value);
    
    if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) {
        alert('Lütfen geçerli değerler giriniz (n ≥ r ≥ 0).');
        return;
    }

    const factorial = n => {
        if (n === 0) return 1;
        return n * factorial(n - 1);
    };

    const combination = factorial(n) / (factorial(r) * factorial(n - r));
    const resultDiv = document.getElementById('combination-result');
    resultDiv.innerHTML = `
        <h4>Sonuç:</h4>
        <p>C(${n},${r}) = ${combination}</p>
    `;
    resultDiv.style.display = 'block';
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Lütfen geçerli değerler giriniz.');
        return;
    }

    const bmi = weight / Math.pow(height / 100, 2);
    let category;

    if (bmi < 18.5) category = 'Zayıf';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Fazla Kilolu';
    else category = 'Obez';

    const resultDiv = document.getElementById('bmi-result');
    resultDiv.innerHTML = `
        <h4>Sonuçlar:</h4>
        <p>Vücut Kitle İndeksiniz: ${bmi.toFixed(1)}</p>
        <p>Kategori: ${category}</p>
    `;
    resultDiv.style.display = 'block';
}

function calculateCalories() {
    const weight = parseFloat(document.getElementById('cal-weight').value);
    const height = parseFloat(document.getElementById('cal-height').value);
    const age = parseInt(document.getElementById('cal-age').value);
    const gender = document.getElementById('cal-gender').value;
    const activity = parseFloat(document.getElementById('cal-activity').value);

    if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
        alert('Lütfen geçerli değerler giriniz.');
        return;
    }

    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const calories = bmr * activity;

    const resultDiv = document.getElementById('calories-result');
    resultDiv.innerHTML = `
        <h4>Sonuçlar:</h4>
        <p>Bazal Metabolizma Hızınız: ${Math.round(bmr)} kcal</p>
        <p>Günlük Kalori İhtiyacınız: ${Math.round(calories)} kcal</p>
    `;
    resultDiv.style.display = 'block';
}

function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    
    if (isNaN(birthdate.getTime())) {
        alert('Lütfen geçerli bir tarih giriniz.');
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    const resultDiv = document.getElementById('age-result');
    resultDiv.innerHTML = `
        <h4>Sonuç:</h4>
        <p>Yaşınız: ${age}</p>
    `;
    resultDiv.style.display = 'block';
}

function calculateDateDifference() {
    const date1 = new Date(document.getElementById('date1').value);
    const date2 = new Date(document.getElementById('date2').value);
    
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        alert('Lütfen geçerli tarihler giriniz.');
        return;
    }

    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const resultDiv = document.getElementById('date-diff-result');
    resultDiv.innerHTML = `
        <h4>Sonuç:</h4>
        <p>İki tarih arasındaki fark: ${diffDays} gün</p>
    `;
    resultDiv.style.display = 'block';
}

// Alan hesaplama fonksiyonları
function updateAreaInputs() {
    const shape = document.getElementById('shape').value;
    const inputsDiv = document.getElementById('area-inputs');
    
    let html = '';
    switch(shape) {
        case 'square':
            html = `
                <div class="mb-3">
                    <label for="square-side" class="form-label">Kenar Uzunluğu (cm)</label>
                    <input type="number" class="form-control" id="square-side" required>
                </div>
            `;
            break;
        case 'rectangle':
            html = `
                <div class="mb-3">
                    <label for="rect-width" class="form-label">Genişlik (cm)</label>
                    <input type="number" class="form-control" id="rect-width" required>
                </div>
                <div class="mb-3">
                    <label for="rect-height" class="form-label">Yükseklik (cm)</label>
                    <input type="number" class="form-control" id="rect-height" required>
                </div>
            `;
            break;
        case 'triangle':
            html = `
                <div class="mb-3">
                    <label for="tri-base" class="form-label">Taban (cm)</label>
                    <input type="number" class="form-control" id="tri-base" required>
                </div>
                <div class="mb-3">
                    <label for="tri-height" class="form-label">Yükseklik (cm)</label>
                    <input type="number" class="form-control" id="tri-height" required>
                </div>
            `;
            break;
        case 'circle':
            html = `
                <div class="mb-3">
                    <label for="circle-radius" class="form-label">Yarıçap (cm)</label>
                    <input type="number" class="form-control" id="circle-radius" required>
                </div>
            `;
            break;
    }
    inputsDiv.innerHTML = html;
}

function calculateArea() {
    const shape = document.getElementById('shape').value;
    const resultDiv = document.getElementById('area-result');
    let area = 0;
    let description = '';

    try {
        switch(shape) {
            case 'square':
                const side = parseFloat(document.getElementById('square-side').value);
                area = side * side;
                description = `Kenar = ${side} cm`;
                break;
            case 'rectangle':
                const width = parseFloat(document.getElementById('rect-width').value);
                const height = parseFloat(document.getElementById('rect-height').value);
                area = width * height;
                description = `Genişlik = ${width} cm, Yükseklik = ${height} cm`;
                break;
            case 'triangle':
                const base = parseFloat(document.getElementById('tri-base').value);
                const triHeight = parseFloat(document.getElementById('tri-height').value);
                area = (base * triHeight) / 2;
                description = `Taban = ${base} cm, Yükseklik = ${triHeight} cm`;
                break;
            case 'circle':
                const radius = parseFloat(document.getElementById('circle-radius').value);
                area = Math.PI * radius * radius;
                description = `Yarıçap = ${radius} cm`;
                break;
        }

        resultDiv.innerHTML = `
            <h4>Sonuç:</h4>
            <p>${description}</p>
            <p>Alan = ${area.toFixed(2)} cm²</p>
        `;
        resultDiv.style.display = 'block';
    } catch(e) {
        alert('Lütfen geçerli değerler giriniz.');
    }
}

// Çevre hesaplama fonksiyonları
function updatePerimeterInputs() {
    const shape = document.getElementById('perimeter-shape').value;
    const inputsDiv = document.getElementById('perimeter-inputs');
    
    let html = '';
    switch(shape) {
        case 'square':
            html = `
                <div class="mb-3">
                    <label for="square-side-p" class="form-label">Kenar Uzunluğu (cm)</label>
                    <input type="number" class="form-control" id="square-side-p" required>
                </div>
            `;
            break;
        case 'rectangle':
            html = `
                <div class="mb-3">
                    <label for="rect-width-p" class="form-label">Genişlik (cm)</label>
                    <input type="number" class="form-control" id="rect-width-p" required>
                </div>
                <div class="mb-3">
                    <label for="rect-height-p" class="form-label">Yükseklik (cm)</label>
                    <input type="number" class="form-control" id="rect-height-p" required>
                </div>
            `;
            break;
        case 'triangle':
            html = `
                <div class="mb-3">
                    <label for="tri-side1" class="form-label">1. Kenar (cm)</label>
                    <input type="number" class="form-control" id="tri-side1" required>
                </div>
                <div class="mb-3">
                    <label for="tri-side2" class="form-label">2. Kenar (cm)</label>
                    <input type="number" class="form-control" id="tri-side2" required>
                </div>
                <div class="mb-3">
                    <label for="tri-side3" class="form-label">3. Kenar (cm)</label>
                    <input type="number" class="form-control" id="tri-side3" required>
                </div>
            `;
            break;
        case 'circle':
            html = `
                <div class="mb-3">
                    <label for="circle-radius-p" class="form-label">Yarıçap (cm)</label>
                    <input type="number" class="form-control" id="circle-radius-p" required>
                </div>
            `;
            break;
    }
    inputsDiv.innerHTML = html;
}

function calculatePerimeter() {
    const shape = document.getElementById('perimeter-shape').value;
    const resultDiv = document.getElementById('perimeter-result');
    let perimeter = 0;
    let description = '';

    try {
        switch(shape) {
            case 'square':
                const side = parseFloat(document.getElementById('square-side-p').value);
                perimeter = 4 * side;
                description = `Kenar = ${side} cm`;
                break;
            case 'rectangle':
                const width = parseFloat(document.getElementById('rect-width-p').value);
                const height = parseFloat(document.getElementById('rect-height-p').value);
                perimeter = 2 * (width + height);
                description = `Genişlik = ${width} cm, Yükseklik = ${height} cm`;
                break;
            case 'triangle':
                const side1 = parseFloat(document.getElementById('tri-side1').value);
                const side2 = parseFloat(document.getElementById('tri-side2').value);
                const side3 = parseFloat(document.getElementById('tri-side3').value);
                perimeter = side1 + side2 + side3;
                description = `Kenarlar = ${side1} cm, ${side2} cm, ${side3} cm`;
                break;
            case 'circle':
                const radius = parseFloat(document.getElementById('circle-radius-p').value);
                perimeter = 2 * Math.PI * radius;
                description = `Yarıçap = ${radius} cm`;
                break;
        }

        resultDiv.innerHTML = `
            <h4>Sonuç:</h4>
            <p>${description}</p>
            <p>Çevre = ${perimeter.toFixed(2)} cm</p>
        `;
        resultDiv.style.display = 'block';
    } catch(e) {
        alert('Lütfen geçerli değerler giriniz.');
    }
}

// Hacim hesaplama fonksiyonları
function updateVolumeInputs() {
    const shape = document.getElementById('volume-shape').value;
    const inputsDiv = document.getElementById('volume-inputs');
    
    let html = '';
    switch(shape) {
        case 'cube':
            html = `
                <div class="mb-3">
                    <label for="cube-side" class="form-label">Kenar Uzunluğu (cm)</label>
                    <input type="number" class="form-control" id="cube-side" required>
                </div>
            `;
            break;
        case 'rectangular-prism':
            html = `
                <div class="mb-3">
                    <label for="prism-width" class="form-label">Genişlik (cm)</label>
                    <input type="number" class="form-control" id="prism-width" required>
                </div>
                <div class="mb-3">
                    <label for="prism-length" class="form-label">Uzunluk (cm)</label>
                    <input type="number" class="form-control" id="prism-length" required>
                </div>
                <div class="mb-3">
                    <label for="prism-height" class="form-label">Yükseklik (cm)</label>
                    <input type="number" class="form-control" id="prism-height" required>
                </div>
            `;
            break;
        case 'cylinder':
            html = `
                <div class="mb-3">
                    <label for="cylinder-radius" class="form-label">Yarıçap (cm)</label>
                    <input type="number" class="form-control" id="cylinder-radius" required>
                </div>
                <div class="mb-3">
                    <label for="cylinder-height" class="form-label">Yükseklik (cm)</label>
                    <input type="number" class="form-control" id="cylinder-height" required>
                </div>
            `;
            break;
        case 'sphere':
            html = `
                <div class="mb-3">
                    <label for="sphere-radius" class="form-label">Yarıçap (cm)</label>
                    <input type="number" class="form-control" id="sphere-radius" required>
                </div>
            `;
            break;
    }
    inputsDiv.innerHTML = html;
}

function calculateVolume() {
    const shape = document.getElementById('volume-shape').value;
    const resultDiv = document.getElementById('volume-result');
    let volume = 0;
    let description = '';

    try {
        switch(shape) {
            case 'cube':
                const side = parseFloat(document.getElementById('cube-side').value);
                volume = Math.pow(side, 3);
                description = `Kenar = ${side} cm`;
                break;
            case 'rectangular-prism':
                const width = parseFloat(document.getElementById('prism-width').value);
                const length = parseFloat(document.getElementById('prism-length').value);
                const height = parseFloat(document.getElementById('prism-height').value);
                volume = width * length * height;
                description = `Genişlik = ${width} cm, Uzunluk = ${length} cm, Yükseklik = ${height} cm`;
                break;
            case 'cylinder':
                const radius = parseFloat(document.getElementById('cylinder-radius').value);
                const cylHeight = parseFloat(document.getElementById('cylinder-height').value);
                volume = Math.PI * Math.pow(radius, 2) * cylHeight;
                description = `Yarıçap = ${radius} cm, Yükseklik = ${cylHeight} cm`;
                break;
            case 'sphere':
                const sphereRadius = parseFloat(document.getElementById('sphere-radius').value);
                volume = (4/3) * Math.PI * Math.pow(sphereRadius, 3);
                description = `Yarıçap = ${sphereRadius} cm`;
                break;
        }

        resultDiv.innerHTML = `
            <h4>Sonuç:</h4>
            <p>${description}</p>
            <p>Hacim = ${volume.toFixed(2)} cm³</p>
        `;
        resultDiv.style.display = 'block';
    } catch(e) {
        alert('Lütfen geçerli değerler giriniz.');
    }
}

// Not ortalaması hesaplama fonksiyonları
let gradeCount = 1;

function addGradeInput() {
    gradeCount++;
    const container = document.getElementById('grades-container');
    const div = document.createElement('div');
    div.className = 'mb-3';
    div.innerHTML = `
        <label class="form-label">${gradeCount}. Ders</label>
        <div class="row">
            <div class="col-md-8">
                <input type="text" class="form-control" placeholder="Ders Adı" data-grade-name="${gradeCount}">
            </div>
            <div class="col-md-4">
                <input type="number" class="form-control" placeholder="Not" min="0" max="100" data-grade-value="${gradeCount}">
            </div>
        </div>
    `;
    container.appendChild(div);
}

function calculateGradeAverage() {
    const grades = [];
    let totalGrade = 0;
    let validGradeCount = 0;

    for (let i = 1; i <= gradeCount; i++) {
        const nameInput = document.querySelector(`[data-grade-name="${i}"]`);
        const valueInput = document.querySelector(`[data-grade-value="${i}"]`);
        
        if (nameInput && valueInput && nameInput.value && valueInput.value) {
            const grade = parseFloat(valueInput.value);
            if (!isNaN(grade) && grade >= 0 && grade <= 100) {
                grades.push({
                    name: nameInput.value,
                    value: grade
                });
                totalGrade += grade;
                validGradeCount++;
            }
        }
    }

    if (validGradeCount === 0) {
        alert('Lütfen en az bir ders notu giriniz.');
        return;
    }

    const average = totalGrade / validGradeCount;
    const resultDiv = document.getElementById('grade-result');
    
    let html = `
        <h4>Sonuçlar:</h4>
        <p>Girilen Dersler:</p>
        <ul>
    `;
    
    grades.forEach(grade => {
        html += `<li>${grade.name}: ${grade.value}</li>`;
    });
    
    html += `
        </ul>
        <p><strong>Not Ortalaması: ${average.toFixed(2)}</strong></p>
    `;
    
    resultDiv.innerHTML = html;
    resultDiv.style.display = 'block';
}

// Takdir teşekkür hesaplama fonksiyonları
let courseCount = 1;

function addCourseInput() {
    courseCount++;
    const container = document.getElementById('course-grades-container');
    const div = document.createElement('div');
    div.className = 'mb-3';
    div.innerHTML = `
        <label class="form-label">${courseCount}. Ders</label>
        <div class="row">
            <div class="col-md-8">
                <input type="text" class="form-control" placeholder="Ders Adı" data-course-name="${courseCount}">
            </div>
            <div class="col-md-4">
                <input type="number" class="form-control" placeholder="Not" min="0" max="100" data-course-grade="${courseCount}">
            </div>
        </div>
    `;
    container.appendChild(div);
}

function calculateHonorCertificate() {
    const behaviorGrade = parseFloat(document.getElementById('behavior-grade').value);
    const grades = [];
    let totalGrade = 0;
    let validGradeCount = 0;

    for (let i = 1; i <= courseCount; i++) {
        const nameInput = document.querySelector(`[data-course-name="${i}"]`);
        const gradeInput = document.querySelector(`[data-course-grade="${i}"]`);
        
        if (nameInput && gradeInput && nameInput.value && gradeInput.value) {
            const grade = parseFloat(gradeInput.value);
            if (!isNaN(grade) && grade >= 0 && grade <= 100) {
                grades.push({
                    name: nameInput.value,
                    value: grade
                });
                totalGrade += grade;
                validGradeCount++;
            }
        }
    }

    if (validGradeCount === 0) {
        alert('Lütfen en az bir ders notu giriniz.');
        return;
    }

    const average = totalGrade / validGradeCount;
    const resultDiv = document.getElementById('certificate-result');
    
    let certificate = '';
    if (behaviorGrade >= 70) {
        if (average >= 85) certificate = 'TAKDİR belgesi almaya hak kazandınız!';
        else if (average >= 70) certificate = 'TEŞEKKÜR belgesi almaya hak kazandınız!';
        else certificate = 'Belge almaya hak kazanamadınız.';
    } else {
        certificate = 'Davranış notunuz yetersiz olduğu için belge alamazsınız.';
    }

    let html = `
        <h4>Sonuçlar:</h4>
        <p>Davranış Notu: ${behaviorGrade}</p>
        <p>Girilen Dersler:</p>
        <ul>
    `;
    
    grades.forEach(grade => {
        html += `<li>${grade.name}: ${grade.value}</li>`;
    });
    
    html += `
        </ul>
        <p><strong>Not Ortalaması: ${average.toFixed(2)}</strong></p>
        <p><strong>${certificate}</strong></p>
    `;
    
    resultDiv.innerHTML = html;
    resultDiv.style.display = 'block';
}

// Üniversite puanı hesaplama fonksiyonu
function calculateUniversityScore() {
    const turkishNet = parseFloat(document.getElementById('turkish-net').value) || 0;
    const mathNet = parseFloat(document.getElementById('math-net').value) || 0;
    const socialNet = parseFloat(document.getElementById('social-net').value) || 0;
    const scienceNet = parseFloat(document.getElementById('science-net').value) || 0;
    const diplomaGrade = parseFloat(document.getElementById('diploma-grade').value) || 0;

    if (turkishNet + mathNet + socialNet + scienceNet === 0) {
        alert('Lütfen en az bir net değeri giriniz.');
        return;
    }

    // TYT puanı hesaplama (yaklaşık formül)
    const basePoint = 100;
    const turkishPoint = turkishNet * 3.3;
    const mathPoint = mathNet * 3.4;
    const socialPoint = socialNet * 3.4;
    const sciencePoint = scienceNet * 3.4;
    const diplomaPoint = diplomaGrade * 0.6;

    const tytScore = basePoint + turkishPoint + mathPoint + socialPoint + sciencePoint + diplomaPoint;

    const resultDiv = document.getElementById('university-result');
    resultDiv.innerHTML = `
        <h4>Sonuçlar:</h4>
        <p>Türkçe Net: ${turkishNet}</p>
        <p>Matematik Net: ${mathNet}</p>
        <p>Sosyal Net: ${socialNet}</p>
        <p>Fen Net: ${scienceNet}</p>
        <p>Diploma Notu: ${diplomaGrade}</p>
        <p><strong>Tahmini TYT Puanı: ${tytScore.toFixed(2)}</strong></p>
        <small>Not: Bu hesaplama yaklaşık bir değerdir ve ÖSYM'nin kullandığı gerçek formülden farklılık gösterebilir.</small>
    `;
    resultDiv.style.display = 'block';
}

function calculateRoot() {
    const number = parseFloat(document.getElementById('root-number').value);
    const power = parseInt(document.getElementById('root-power').value);
    
    if (isNaN(number) || isNaN(power) || power <= 0) {
        alert('Lütfen geçerli değerler giriniz.');
        return;
    }

    const result = Math.pow(number, 1/power);
    const resultDiv = document.getElementById('root-result');
    resultDiv.innerHTML = `
        <h4>Sonuç:</h4>
        <p>${power}√${number} = ${result.toFixed(4)}</p>
    `;
    resultDiv.style.display = 'block';
}

function calculatePower() {
    const base = parseFloat(document.getElementById('power-base').value);
    const exp = parseFloat(document.getElementById('power-exp').value);
    
    if (isNaN(base) || isNaN(exp)) {
        alert('Lütfen geçerli değerler giriniz.');
        return;
    }

    const result = Math.pow(base, exp);
    const resultDiv = document.getElementById('power-result');
    resultDiv.innerHTML = `
        <h4>Sonuç:</h4>
        <p>${base}^${exp} = ${result}</p>
    `;
    resultDiv.style.display = 'block';
}

function calculatePermutation() {
    const n = parseInt(document.getElementById('perm-n').value);
    const r = parseInt(document.getElementById('perm-r').value);
    
    if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) {
        alert('Lütfen geçerli değerler giriniz (n ≥ r ≥ 0).');
        return;
    }

    const factorial = n => {
        if (n === 0) return 1;
        return n * factorial(n - 1);
    };

    const permutation = factorial(n) / factorial(n - r);
    const resultDiv = document.getElementById('permutation-result');
    resultDiv.innerHTML = `
        <h4>Sonuç:</h4>
        <p>P(${n},${r}) = ${permutation}</p>
    `;
    resultDiv.style.display = 'block';
}

function calculateMod() {
    const number = parseInt(document.getElementById('mod-number').value);
    const base = parseInt(document.getElementById('mod-base').value);
    
    if (isNaN(number) || isNaN(base) || base <= 0) {
        alert('Lütfen geçerli değerler giriniz.');
        return;
    }

    const result = ((number % base) + base) % base;
    const resultDiv = document.getElementById('mod-result');
    resultDiv.innerHTML = `
        <h4>Sonuç:</h4>
        <p>${number} mod ${base} = ${result}</p>
    `;
    resultDiv.style.display = 'block';
}

function calculateInterest() {
    const amount = parseFloat(document.getElementById('interest-amount').value);
    const rate = parseFloat(document.getElementById('interest-rate').value);
    const period = parseInt(document.getElementById('interest-period').value);
    const type = document.getElementById('interest-type').value;
    
    if (isNaN(amount) || isNaN(rate) || isNaN(period) || amount <= 0 || rate <= 0 || period <= 0) {
        alert('Lütfen geçerli değerler giriniz.');
        return;
    }

    let interest, total;
    if (type === 'simple') {
        interest = amount * (rate/100) * (period/12);
        total = amount + interest;
    } else {
        total = amount * Math.pow(1 + (rate/100)/12, period);
        interest = total - amount;
    }

    const resultDiv = document.getElementById('interest-result');
    resultDiv.innerHTML = `
        <h4>Sonuçlar:</h4>
        <p>Ana Para: ${amount.toFixed(2)} TL</p>
        <p>Faiz Tutarı: ${interest.toFixed(2)} TL</p>
        <p>Toplam: ${total.toFixed(2)} TL</p>
    `;
    resultDiv.style.display = 'block';
}

function calculateSalary() {
    const grossSalary = parseFloat(document.getElementById('gross-salary').value);
    const year = document.getElementById('salary-year').value;
    
    if (isNaN(grossSalary) || grossSalary <= 0) {
        alert('Lütfen geçerli bir maaş giriniz.');
        return;
    }

    // 2024 vergi dilimleri ve oranları
    const tax2024 = [
        { limit: 70000, rate: 15 },
        { limit: 150000, rate: 20 },
        { limit: 550000, rate: 27 },
        { limit: 1900000, rate: 35 },
        { limit: Infinity, rate: 40 }
    ];

    // 2023 vergi dilimleri ve oranları
    const tax2023 = [
        { limit: 32000, rate: 15 },
        { limit: 70000, rate: 20 },
        { limit: 250000, rate: 27 },
        { limit: 880000, rate: 35 },
        { limit: Infinity, rate: 40 }
    ];

    const taxBrackets = year === '2024' ? tax2024 : tax2023;
    
    // SGK kesintisi (%14)
    const sgkEmployee = grossSalary * 0.14;
    
    // İşsizlik sigortası (%1)
    const unemploymentInsurance = grossSalary * 0.01;
    
    // Gelir vergisi matrahı
    const taxBase = grossSalary - sgkEmployee - unemploymentInsurance;
    
    // Gelir vergisi hesaplama
    let remainingAmount = taxBase * 12; // Yıllık
    let totalTax = 0;
    
    for (const bracket of taxBrackets) {
        if (remainingAmount <= 0) break;
        
        const taxableAmount = Math.min(remainingAmount, bracket.limit);
        totalTax += taxableAmount * (bracket.rate / 100);
        remainingAmount -= taxableAmount;
    }
    
    const monthlyTax = totalTax / 12;
    const damgaVergisi = grossSalary * 0.00759;
    const netSalary = grossSalary - sgkEmployee - unemploymentInsurance - monthlyTax - damgaVergisi;

    const resultDiv = document.getElementById('salary-result');
    resultDiv.innerHTML = `
        <h4>Maaş Detayları (${year}):</h4>
        <p>Brüt Maaş: ${grossSalary.toFixed(2)} TL</p>
        <p>SGK Kesintisi: ${sgkEmployee.toFixed(2)} TL</p>
        <p>İşsizlik Sigortası: ${unemploymentInsurance.toFixed(2)} TL</p>
        <p>Gelir Vergisi: ${monthlyTax.toFixed(2)} TL</p>
        <p>Damga Vergisi: ${damgaVergisi.toFixed(2)} TL</p>
        <p><strong>Net Maaş: ${netSalary.toFixed(2)} TL</strong></p>
    `;
    resultDiv.style.display = 'block';
}

function calculateRentalIncome() {
    const yearlyIncome = parseFloat(document.getElementById('rental-income').value);
    const year = document.getElementById('rental-year').value;
    
    if (isNaN(yearlyIncome) || yearlyIncome <= 0) {
        alert('Lütfen geçerli bir gelir giriniz.');
        return;
    }

    // İstisna tutarları
    const exemption = year === '2024' ? 21000 : 9500;
    
    // Gider yöntemi (götürü gider %15)
    const expenses = yearlyIncome * 0.15;
    
    // Vergi matrahı
    const taxableIncome = Math.max(0, yearlyIncome - exemption - expenses);
    
    // Vergi dilimleri ve oranları
    const taxBrackets = year === '2024' ? [
        { limit: 70000, rate: 15 },
        { limit: 150000, rate: 20 },
        { limit: 550000, rate: 27 },
        { limit: 1900000, rate: 35 },
        { limit: Infinity, rate: 40 }
    ] : [
        { limit: 32000, rate: 15 },
        { limit: 70000, rate: 20 },
        { limit: 250000, rate: 27 },
        { limit: 880000, rate: 35 },
        { limit: Infinity, rate: 40 }
    ];

    // Vergi hesaplama
    let remainingAmount = taxableIncome;
    let totalTax = 0;
    
    for (const bracket of taxBrackets) {
        if (remainingAmount <= 0) break;
        
        const taxableAmount = Math.min(remainingAmount, bracket.limit);
        totalTax += taxableAmount * (bracket.rate / 100);
        remainingAmount -= taxableAmount;
    }

    const resultDiv = document.getElementById('rental-result');
    resultDiv.innerHTML = `
        <h4>Kira Geliri Vergisi Hesaplaması (${year}):</h4>
        <p>Yıllık Kira Geliri: ${yearlyIncome.toFixed(2)} TL</p>
        <p>İstisna Tutarı: ${exemption.toFixed(2)} TL</p>
        <p>Götürü Gider (%15): ${expenses.toFixed(2)} TL</p>
        <p>Vergi Matrahı: ${taxableIncome.toFixed(2)} TL</p>
        <p><strong>Ödenecek Vergi: ${totalTax.toFixed(2)} TL</strong></p>
        <p>Net Gelir: ${(yearlyIncome - totalTax).toFixed(2)} TL</p>
    `;
    resultDiv.style.display = 'block';
}

function calculateIdealWeight() {
    const height = parseFloat(document.getElementById('ideal-height').value);
    const gender = document.getElementById('ideal-gender').value;
    const frame = document.getElementById('ideal-frame').value;
    
    if (isNaN(height) || height <= 0) {
        alert('Lütfen geçerli bir boy giriniz.');
        return;
    }

    // Robinson formülü (1983)
    let baseWeight;
    if (gender === 'male') {
        baseWeight = 52 + 1.9 * ((height - 152.4) / 2.54);
    } else {
        baseWeight = 49 + 1.7 * ((height - 152.4) / 2.54);
    }

    // Vücut yapısına göre ayarlama
    let adjustment;
    switch(frame) {
        case 'small':
            adjustment = 0.9;
            break;
        case 'medium':
            adjustment = 1.0;
            break;
        case 'large':
            adjustment = 1.1;
            break;
    }

    const idealWeight = baseWeight * adjustment;

    const resultDiv = document.getElementById('ideal-weight-result');
    resultDiv.innerHTML = `
        <h4>Sonuç:</h4>
        <p>İdeal Kilonuz: ${idealWeight.toFixed(1)} kg</p>
        <p>Sağlıklı Kilo Aralığı: ${(idealWeight * 0.9).toFixed(1)} - ${(idealWeight * 1.1).toFixed(1)} kg</p>
    `;
    resultDiv.style.display = 'block';
}

function calculateProtein() {
    const weight = parseFloat(document.getElementById('protein-weight').value);
    const activity = document.getElementById('protein-activity').value;
    
    if (isNaN(weight) || weight <= 0) {
        alert('Lütfen geçerli bir kilo giriniz.');
        return;
    }

    let proteinMultiplier;
    let description;
    
    switch(activity) {
        case 'sedentary':
            proteinMultiplier = 0.8;
            description = 'Hareketsiz yaşam tarzı için minimum protein ihtiyacı';
            break;
        case 'moderate':
            proteinMultiplier = 1.2;
            description = 'Orta derece aktif yaşam tarzı için önerilen protein miktarı';
            break;
        case 'active':
            proteinMultiplier = 1.6;
            description = 'Çok Aktif yaşam tarzı ve düzenli egzersiz için önerilen protein miktarı';
            break;
        case 'athlete':
            proteinMultiplier = 2.0;
            description = 'Yoğun antrenman yapan sporcular için önerilen protein miktarı';
            break;
    }

    const proteinNeed = weight * proteinMultiplier;

    const resultDiv = document.getElementById('protein-result');
    resultDiv.innerHTML = `
        <h4>Sonuç:</h4>
        <p>Günlük Protein İhtiyacınız: ${proteinNeed.toFixed(1)} gram</p>
        <p><small>${description}</small></p>
        <p>Bu miktarı şu şekilde karşılayabilirsiniz:</p>
        <ul>
            <li>Tavuk Göğsü: ${(proteinNeed / 0.31).toFixed(0)} gram</li>
            <li>Yumurta: ${Math.ceil(proteinNeed / 6)} adet</li>
            <li>Ton Balığı: ${(proteinNeed / 0.26).toFixed(0)} gram</li>
            <li>Kırmızı Et: ${(proteinNeed / 0.26).toFixed(0)} gram</li>
        </ul>
    `;
    resultDiv.style.display = 'block';
}

function calculateBodyFat() {
    const weight = parseFloat(document.getElementById('fat-weight').value);
    const height = parseFloat(document.getElementById('fat-height').value);
    const age = parseInt(document.getElementById('fat-age').value);
    const gender = document.getElementById('fat-gender').value;
    const neck = parseFloat(document.getElementById('fat-neck').value);
    const waist = parseFloat(document.getElementById('fat-waist').value);
    const hip = gender === 'female' ? parseFloat(document.getElementById('fat-hip').value) : 0;
    
    if (isNaN(weight) || isNaN(height) || isNaN(age) || isNaN(neck) || isNaN(waist) || 
        (gender === 'female' && isNaN(hip)) ||
        weight <= 0 || height <= 0 || age <= 0 || neck <= 0 || waist <= 0 || 
        (gender === 'female' && hip <= 0)) {
        alert('Lütfen tüm değerleri geçerli bir şekilde giriniz.');
        return;
    }

    let bodyFat;
    if (gender === 'male') {
        bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
        bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
    }

    let category;
    if (gender === 'male') {
        if (bodyFat < 6) category = 'Tehlikeli Düşük';
        else if (bodyFat < 14) category = 'Atletik';
        else if (bodyFat < 18) category = 'Fit';
        else if (bodyFat < 25) category = 'Normal';
        else category = 'Yüksek';
    } else {
        if (bodyFat < 14) category = 'Tehlikeli Düşük';
        else if (bodyFat < 21) category = 'Atletik';
        else if (bodyFat < 25) category = 'Fit';
        else if (bodyFat < 32) category = 'Normal';
        else category = 'Yüksek';
    }

    const resultDiv = document.getElementById('body-fat-result');
    resultDiv.innerHTML = `
        <h4>Sonuç:</h4>
        <p>Vücut Yağ Oranınız: %${bodyFat.toFixed(1)}</p>
        <p>Kategori: ${category}</p>
        <p>Yağsız Vücut Kütlesi: ${(weight * (1 - bodyFat/100)).toFixed(1)} kg</p>
        <p>Vücut Yağ Kütlesi: ${(weight * bodyFat/100).toFixed(1)} kg</p>
    `;
    resultDiv.style.display = 'block';
}

function calculateWorkDays() {
    const startDate = new Date(document.getElementById('work-start-date').value);
    const endDate = new Date(document.getElementById('work-end-date').value);
    const includeSaturday = document.getElementById('include-saturday').checked;
    
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        alert('Lütfen geçerli tarihler giriniz.');
        return;
    }

    if (endDate < startDate) {
        alert('Bitiş tarihi başlangıç tarihinden önce olamaz.');
        return;
    }

    let workDays = 0;
    const currentDate = new Date(startDate);
    
    while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay();
        if (dayOfWeek !== 0 && (includeSaturday || dayOfWeek !== 6)) {
            workDays++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    const resultDiv = document.getElementById('work-days-result');
    resultDiv.innerHTML = `
        <h4>Sonuç:</h4>
        <p>Başlangıç: ${startDate.toLocaleDateString('tr-TR')}</p>
        <p>Bitiş: ${endDate.toLocaleDateString('tr-TR')}</p>
        <p>Toplam İş Günü: ${workDays} gün</p>
        <p><small>${includeSaturday ? 'Cumartesi günleri dahil edildi.' : 'Cumartesi günleri dahil edilmedi.'}</small></p>
    `;
    resultDiv.style.display = 'block';
}

function calculateRamadan() {
    const year = parseInt(document.getElementById('ramadan-year').value);
    
    // Hicri takvim hesaplaması (yaklaşık)
    const ramadanDates = {
        2024: { start: new Date(2024, 2, 11), end: new Date(2024, 3, 9) },
        2025: { start: new Date(2025, 2, 1), end: new Date(2025, 2, 30) }
    };

    const dates = ramadanDates[year];
    if (!dates) {
        alert('Seçilen yıl için Ramazan tarihleri bulunamadı.');
        return;
    }

    const today = new Date();
    let message = '';
    
    if (today < dates.start) {
        const daysUntil = Math.ceil((dates.start - today) / (1000 * 60 * 60 * 24));
        message = `Ramazan'ın başlamasına ${daysUntil} gün var.`;
    } else if (today > dates.end) {
        message = 'Ramazan sona erdi.';
    } else {
        const currentDay = Math.ceil((today - dates.start) / (1000 * 60 * 60 * 24));
        const remainingDays = 30 - currentDay;
        message = `Ramazan'ın ${currentDay}. günü. Kalan gün sayısı: ${remainingDays}`;
    }

    const resultDiv = document.getElementById('ramadan-result');
    resultDiv.innerHTML = `
        <h4>${year} Yılı Ramazan Bilgileri:</h4>
        <p>Başlangıç: ${dates.start.toLocaleDateString('tr-TR')}</p>
        <p>Bitiş: ${dates.end.toLocaleDateString('tr-TR')}</p>
        <p><strong>${message}</strong></p>
    `;
    resultDiv.style.display = 'block';
}

// Event listeners for gender selection in body fat calculator
document.addEventListener('DOMContentLoaded', function() {
    const fatGenderSelect = document.getElementById('fat-gender');
    if (fatGenderSelect) {
        fatGenderSelect.addEventListener('change', function() {
            const hipDiv = document.getElementById('fat-hip-div');
            if (hipDiv) {
                hipDiv.style.display = this.value === 'female' ? 'block' : 'none';
            }
        });
    }
});

// Hesaplayıcı yükleme fonksiyonu
function loadCalculator(calculatorId) {
    const container = document.getElementById('calculator-container');
    const welcomeMessage = document.getElementById('welcome-message');
    
    if (welcomeMessage) {
        welcomeMessage.style.display = 'none';
    }
    
    if (calculatorTemplates[calculatorId]) {
        const description = document.querySelector(`[data-calculator="${calculatorId}"]`).getAttribute('data-description');
        const template = `
            <div class="calculator-card fade-in">
                <div class="calculator-description">
                    <i class="fas fa-info-circle me-2"></i>
                    ${description}
                </div>
                ${calculatorTemplates[calculatorId]}
            </div>
        `;
        container.innerHTML = template;
    } else {
        container.innerHTML = '<div class="alert alert-danger">Hesaplayıcı bulunamadı.</div>';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Tüm hesaplayıcı linklerini dinle
    document.querySelectorAll('[data-calculator]').forEach(link => {
        // Tooltip ekle
        const description = link.getAttribute('data-description');
        if (description) {
            link.setAttribute('title', description);
            link.setAttribute('data-bs-toggle', 'tooltip');
            link.setAttribute('data-bs-placement', 'right');
        }

        link.addEventListener('click', function(e) {
            e.preventDefault();
            const calculatorId = this.getAttribute('data-calculator');
            loadCalculator(calculatorId);
            
            // Geometri hesaplayıcıları için input alanlarını güncelle
            if (calculatorId === 'alan') updateAreaInputs();
            if (calculatorId === 'cevre') updatePerimeterInputs();
            if (calculatorId === 'hacim') updateVolumeInputs();

            // Mobil menüyü kapat
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Eğitim hesaplayıcıları için değişkenleri sıfırla
    document.querySelectorAll('[data-calculator]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('data-calculator') === 'not-ortalama') {
                gradeCount = 1;
            } else if (this.getAttribute('data-calculator') === 'takdir-tesekkur') {
                courseCount = 1;
            }
        });
    });

    // Bootstrap tooltips'i aktifleştir
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Hesaplama fonksiyonları
function hesaplaYakit() {
    const mesafe = parseFloat(document.getElementById('mesafe').value);
    const tuketim = parseFloat(document.getElementById('tuketim').value);
    const yakitFiyat = parseFloat(document.getElementById('yakit-fiyat').value);
    
    if (mesafe && tuketim && yakitFiyat) {
        const toplamTuketim = (mesafe * tuketim) / 100;
        const maliyet = toplamTuketim * yakitFiyat;
        gosterSonuc('yakit-result', `Toplam yakıt tüketimi: ${toplamTuketim.toFixed(2)} litre<br>Toplam maliyet: ${maliyet.toFixed(2)} TL`);
    }
}

function hesaplaMesafe() {
    const hiz = parseFloat(document.getElementById('hiz').value);
    const sure = parseFloat(document.getElementById('sure').value);
    
    if (hiz && sure) {
        const mesafe = hiz * sure;
        gosterSonuc('mesafe-result', `Toplam mesafe: ${mesafe.toFixed(2)} km`);
    }
}

function hesaplaMTV() {
    const aracTipi = document.getElementById('arac-tipi').value;
    const motorHacmi = parseFloat(document.getElementById('motor-hacmi').value);
    const yas = parseInt(document.getElementById('yas').value);
    
    if (aracTipi && motorHacmi && yas) {
        let bazVergi;
        if (aracTipi === 'otomobil') {
            if (motorHacmi <= 1300) bazVergi = 1500;
            else if (motorHacmi <= 1600) bazVergi = 2000;
            else if (motorHacmi <= 2000) bazVergi = 3000;
            else bazVergi = 4500;
        } else if (aracTipi === 'minibus') {
            bazVergi = 2500;
        } else {
            bazVergi = 3500;
        }
        
        let yasKatsayi = 1;
        if (yas >= 16) yasKatsayi = 0.15;
        else if (yas >= 12) yasKatsayi = 0.25;
        else if (yas >= 7) yasKatsayi = 0.5;
        else if (yas >= 4) yasKatsayi = 0.75;
        
        const mtv = bazVergi * yasKatsayi;
        gosterSonuc('mtv-result', `MTV Tutarı: ${mtv.toFixed(2)} TL`);
    }
}

function hesaplaMaxNabiz() {
    const yas = parseInt(document.getElementById('yas').value);
    const aktiviteSeviyesi = document.getElementById('aktivite-seviyesi').value;
    
    if (yas && aktiviteSeviyesi) {
        const maxNabiz = 220 - yas;
        let hedefMin, hedefMax;
        
        switch(aktiviteSeviyesi) {
            case 'dusuk':
                hedefMin = maxNabiz * 0.5;
                hedefMax = maxNabiz * 0.6;
                break;
            case 'orta':
                hedefMin = maxNabiz * 0.6;
                hedefMax = maxNabiz * 0.7;
                break;
            case 'yuksek':
                hedefMin = maxNabiz * 0.7;
                hedefMax = maxNabiz * 0.85;
                break;
        }
        
        gosterSonuc('max-nabiz-result', `Maksimum nabız: ${maxNabiz}<br>Hedef nabız aralığı: ${Math.round(hedefMin)} - ${Math.round(hedefMax)}`);
    }
}

function hesaplaKaloriYakim() {
    const kilo = parseFloat(document.getElementById('kilo').value);
    const aktivite = document.getElementById('aktivite').value;
    const sure = parseFloat(document.getElementById('sure').value);
    
    if (kilo && aktivite && sure) {
        let met;
        switch(aktivite) {
            case 'yuruyus': met = 3.5; break;
            case 'kosu': met = 8.0; break;
            case 'bisiklet': met = 6.0; break;
            case 'yuzme': met = 7.0; break;
        }
        
        const kalori = (met * 3.5 * kilo * sure) / 200;
        gosterSonuc('kalori-yakim-result', `Yakılan kalori: ${Math.round(kalori)} kcal`);
    }
}

function hesaplaTaksitKira() {
    const aylikGelir = parseFloat(document.getElementById('aylik-gelir').value);
    const taksit = parseFloat(document.getElementById('taksit').value);
    
    if (aylikGelir && taksit) {
        const oran = (taksit / aylikGelir) * 100;
        let durum;
        
        if (oran <= 30) {
            durum = 'Uygun';
        } else if (oran <= 40) {
            durum = 'Riskli';
        } else {
            durum = 'Yüksek Risk';
        }
        
        gosterSonuc('taksit-kira-result', `Taksit/Kira Gelir Oranı: %${oran.toFixed(2)}<br>Durum: ${durum}`);
    }
}

function hesaplaEmlakVergi() {
    const rayicBedel = parseFloat(document.getElementById('rayic-bedel').value);
    const emlakTipi = document.getElementById('emlak-tipi').value;
    
    if (rayicBedel && emlakTipi) {
        let oran;
        switch(emlakTipi) {
            case 'konut': oran = 0.001; break;
            case 'isyeri': oran = 0.002; break;
            case 'arsa': oran = 0.003; break;
        }
        
        const vergi = rayicBedel * oran;
        gosterSonuc('emlak-vergi-result', `Yıllık Emlak Vergisi: ${vergi.toFixed(2)} TL`);
    }
}

function hesaplaMesai() {
    const saatUcret = parseFloat(document.getElementById('saat-ucret').value);
    const mesaiSaat = parseFloat(document.getElementById('mesai-saat').value);
    const mesaiTipi = document.getElementById('mesai-tipi').value;
    
    if (saatUcret && mesaiSaat && mesaiTipi) {
        let carpan;
        switch(mesaiTipi) {
            case 'hafta-ici': carpan = 1.5; break;
            case 'hafta-sonu': carpan = 2.0; break;
            case 'tatil': carpan = 2.5; break;
        }
        
        const mesaiUcret = saatUcret * mesaiSaat * carpan;
        gosterSonuc('mesai-result', `Mesai Ücreti: ${mesaiUcret.toFixed(2)} TL`);
    }
}

function hesaplaKidem() {
    const calismaYil = parseFloat(document.getElementById('calisma-yil').value);
    const brutUcret = parseFloat(document.getElementById('brut-ucret').value);
    
    if (calismaYil && brutUcret) {
        const kidemTazminati = brutUcret * calismaYil;
        gosterSonuc('kidem-result', `Kıdem Tazminatı: ${kidemTazminati.toFixed(2)} TL`);
    }
}

function hesaplaParaBirimi() {
    const miktar = parseFloat(document.getElementById('miktar').value);
    const kaynakBirim = document.getElementById('kaynak-birim').value;
    const hedefBirim = document.getElementById('hedef-birim').value;
    
    if (miktar && kaynakBirim && hedefBirim) {
        // Not: Gerçek uygulamada güncel kur API'si kullanılmalı
        const kurlar = {
            'TRY': { 'USD': 0.031, 'EUR': 0.029, 'GBP': 0.025 },
            'USD': { 'TRY': 32.23, 'EUR': 0.93, 'GBP': 0.80 },
            'EUR': { 'TRY': 34.66, 'USD': 1.07, 'GBP': 0.86 },
            'GBP': { 'TRY': 40.30, 'USD': 1.25, 'EUR': 1.16 }
        };
        
        let sonuc;
        if (kaynakBirim === hedefBirim) {
            sonuc = miktar;
        } else if (kaynakBirim === 'TRY') {
            sonuc = miktar * kurlar['TRY'][hedefBirim];
        } else if (hedefBirim === 'TRY') {
            sonuc = miktar * kurlar[kaynakBirim]['TRY'];
        } else {
            sonuc = miktar * kurlar[kaynakBirim]['TRY'] * kurlar['TRY'][hedefBirim];
        }
        
        gosterSonuc('para-birimi-result', `${miktar} ${kaynakBirim} = ${sonuc.toFixed(2)} ${hedefBirim}`);
    }
}

function hesaplaDegerKaybi() {
    const aracDeger = parseFloat(document.getElementById('arac-deger').value);
    const aracYas = parseInt(document.getElementById('arac-yas').value);
    const kazaDurum = document.getElementById('kaza-durum').value;
    
    if (isNaN(aracDeger) || isNaN(aracYas) || aracDeger <= 0 || aracYas < 0) {
        alert('Lütfen geçerli değerler giriniz.');
        return;
    }

    let degerKaybi;
    switch(kazaDurum) {
        case 'yok':
            degerKaybi = 0;
            break;
        case 'hafif':
            degerKaybi = aracDeger * 0.1;
            break;
        case 'orta':
            degerKaybi = aracDeger * 0.2;
            break;
        case 'agir':
            degerKaybi = aracDeger * 0.3;
            break;
        default:
            alert('Geçersiz kaza durumu seçildi.');
            return;
    }

    const resultDiv = document.getElementById('deger-kaybi-result');
    resultDiv.innerHTML = `
        <h4>Araç Değer Kaybı Hesaplama:</h4>
        <p>Araç Değeri: ${aracDeger.toFixed(2)} TL</p>
        <p>Araç Yaşı: ${aracYas} yıl</p>
        <p>Kaza Durumu: ${kazaDurum}</p>
        <p>Araç Değer Kaybı: ${degerKaybi.toFixed(2)} TL</p>
    `;
    resultDiv.style.display = 'block';
}

function hesaplaLPG() {
    const aylikKm = parseFloat(document.getElementById('aylik-km').value);
    const benzinTuketim = parseFloat(document.getElementById('benzin-tuketim').value);
    const benzinFiyat = parseFloat(document.getElementById('benzin-fiyat').value);
    const lpgFiyat = parseFloat(document.getElementById('lpg-fiyat').value);
    
    if (isNaN(aylikKm) || isNaN(benzinTuketim) || isNaN(benzinFiyat) || isNaN(lpgFiyat) || aylikKm <= 0 || benzinTuketim <= 0 || benzinFiyat <= 0 || lpgFiyat <= 0) {
        alert('Lütfen geçerli değerler giriniz.');
        return;
    }

    const lpgTuketim = benzinTuketim * (lpgFiyat / benzinFiyat);
    const lpgYakitMaliyeti = aylikKm * lpgTuketim;
    const lpgTasarruf = lpgYakitMaliyeti - (aylikKm * benzinFiyat);

    const resultDiv = document.getElementById('lpg-result');
    resultDiv.innerHTML = `
        <h4>LPG Tasarruf Hesaplama:</h4>
        <p>Aylık Ortalama KM: ${aylikKm.toFixed(2)} km</p>
        <p>100 km'de Benzin Tüketimi: ${benzinTuketim.toFixed(2)} lt</p>
        <p>Benzin Fiyatı: ${benzinFiyat.toFixed(2)} TL/lt</p>
        <p>LPG Fiyatı: ${lpgFiyat.toFixed(2)} TL/lt</p>
        <p>LPG Tüketimi: ${lpgTuketim.toFixed(2)} lt</p>
        <p>LPG Yakıt Maliyeti: ${lpgYakitMaliyeti.toFixed(2)} TL</p>
        <p>LPG Tasarrufu: ${lpgTasarruf.toFixed(2)} TL</p>
    `;
    resultDiv.style.display = 'block';
}

function hesaplaYalitim() {
    const evAlan = parseFloat(document.getElementById('ev-alan').value);
    const yakitTip = document.getElementById('yakit-tip').value;
    const yillikTuketim = parseFloat(document.getElementById('yillik-tuketim').value);
    
    if (isNaN(evAlan) || isNaN(yillikTuketim) || evAlan <= 0 || yillikTuketim <= 0) {
        alert('Lütfen geçerli değerler giriniz.');
        return;
    }

    let yalitimTasarrufu;
    switch(yakitTip) {
        case 'dogalgaz':
            yalitimTasarrufu = yillikTuketim * 0.15;
            break;
        case 'komur':
            yalitimTasarrufu = yillikTuketim * 0.20;
            break;
        case 'elektrik':
            yalitimTasarrufu = yillikTuketim * 0.30;
            break;
        default:
            alert('Geçersiz yakıt tipi seçildi.');
            return;
    }

    const resultDiv = document.getElementById('yalitim-result');
    resultDiv.innerHTML = `
        <h4>Yalıtım Tasarrufu Hesaplama:</h4>
        <p>Ev Alanı: ${evAlan.toFixed(2)} m²</p>
        <p>Yakıt Tipi: ${yakitTip}</p>
        <p>Yıllık Tüketim: ${yillikTuketim.toFixed(2)} TL</p>
        <p>Yalıtım Tasarrufu: ${yalitimTasarrufu.toFixed(2)} TL</p>
    `;
    resultDiv.style.display = 'block';
}

function hesaplaTapu() {
    const gayrimenkulDeger = parseFloat(document.getElementById('gayrimenkul-deger').value);
    const islemTip = document.getElementById('islem-tip').value;
    
    if (isNaN(gayrimenkulDeger) || gayrimenkulDeger <= 0) {
        alert('Lütfen geçerli bir gayrimenkul değeri giriniz.');
        return;
    }

    let tapuHarc;
    switch(islemTip) {
        case 'satis':
            tapuHarc = gayrimenkulDeger * 0.02;
            break;
        case 'ipotek':
            tapuHarc = gayrimenkulDeger * 0.05;
            break;
        default:
            alert('Geçersiz işlem tipi seçildi.');
            return;
    }

    const resultDiv = document.getElementById('tapu-result');
    resultDiv.innerHTML = `
        <h4>Tapu Harcı Hesaplama:</h4>
        <p>Gayrimenkul Değeri: ${gayrimenkulDeger.toFixed(2)} TL</p>
        <p>İşlem Tipi: ${islemTip}</p>
        <p>Tapu Harcı: ${tapuHarc.toFixed(2)} TL</p>
    `;
    resultDiv.style.display = 'block';
}

function hesaplaKomisyon() {
    const emlakDeger = parseFloat(document.getElementById('emlak-deger').value);
    const komisyonOran = parseFloat(document.getElementById('komisyon-oran').value);
    
    if (isNaN(emlakDeger) || isNaN(komisyonOran) || emlakDeger <= 0 || komisyonOran < 0) {
        alert('Lütfen geçerli değerler giriniz.');
        return;
    }

    const komisyon = emlakDeger * (komisyonOran / 100);
    const resultDiv = document.getElementById('komisyon-result');
    resultDiv.innerHTML = `
        <h4>Emlak Komisyonu Hesaplama:</h4>
        <p>Emlak Değeri: ${emlakDeger.toFixed(2)} TL</p>
        <p>Komisyon Oranı: ${komisyonOran}%</p>
        <p>Komisyon: ${komisyon.toFixed(2)} TL</p>
    `;
    resultDiv.style.display = 'block';
}

function hesaplaIhbar() {
    const calismaSuresi = parseFloat(document.getElementById('calisma-suresi').value);
    const aylikUcret = parseFloat(document.getElementById('aylik-ucret').value);
    
    if (isNaN(calismaSuresi) || isNaN(aylikUcret) || calismaSuresi < 0 || aylikUcret < 0) {
        alert('Lütfen geçerli değerler giriniz.');
        return;
    }

    const ihbarTazminat = aylikUcret * calismaSuresi;
    const resultDiv = document.getElementById('ihbar-result');
    resultDiv.innerHTML = `
        <h4>İhbar Tazminatı Hesaplama:</h4>
        <p>Çalışma Süresi: ${calismaSuresi} yıl</p>
        <p>Aylık Brüt Ücret: ${aylikUcret.toFixed(2)} TL</p>
        <p>İhbar Tazminatı: ${ihbarTazminat.toFixed(2)} TL</p>
    `;
    resultDiv.style.display = 'block';
}

function hesaplaEmeklilik() {
    const dogumTarihi = new Date(document.getElementById('dogum-tarihi').value);
    const cinsiyet = document.getElementById('cinsiyet').value;
    const iseBaslama = new Date(document.getElementById('ise-baslama').value);
    
    if (isNaN(dogumTarihi.getTime()) || isNaN(iseBaslama.getTime()) || dogumTarihi > iseBaslama) {
        alert('Lütfen geçerli tarihler giriniz.');
        return;
    }

    const calismaYili = (iseBaslama - dogumTarihi) / (1000 * 60 * 60 * 24 * 365);
    let emeklilikYasi;
    if (cinsiyet === 'erkek') {
        emeklilikYasi = 65;
    } else if (cinsiyet === 'kadin') {
        emeklilikYasi = 60;
    } else {
        alert('Geçersiz cinsiyet seçildi.');
        return;
    }

    const resultDiv = document.getElementById('emeklilik-result');
    resultDiv.innerHTML = `
        <h4>Emeklilik Hesaplama:</h4>
        <p>Doğum Tarihi: ${dogumTarihi.toLocaleDateString('tr-TR')}</p>
        <p>Cinsiyet: ${cinsiyet}</p>
        <p>İşe Başlama Tarihi: ${iseBaslama.toLocaleDateString('tr-TR')}</p>
        <p>Emeklilik Yaşı: ${emeklilikYasi} yıl</p>
    `;
    resultDiv.style.display = 'block';
}

function hesaplaSicaklik() {
    const sicaklikDeger = parseFloat(document.getElementById('sicaklik-deger').value);
    const kaynakBirim = document.getElementById('sicaklik-kaynak').value;
    const hedefBirim = document.getElementById('sicaklik-hedef').value;
    
    if (isNaN(sicaklikDeger) || sicaklikDeger < -273.15) {
        alert('Lütfen geçerli sıcaklık değeri giriniz.');
        return;
    }

    let sonuc;
    switch(kaynakBirim) {
        case 'celsius':
            if (hedefBirim === 'fahrenheit') {
                sonuc = sicaklikDeger * 9/5 + 32;
            } else if (hedefBirim === 'kelvin') {
                sonuc = sicaklikDeger + 273.15;
            } else {
                sonuc = sicaklikDeger;
            }
            break;
        case 'fahrenheit':
            if (hedefBirim === 'celsius') {
                sonuc = (sicaklikDeger - 32) * 5/9;
            } else if (hedefBirim === 'kelvin') {
                sonuc = (sicaklikDeger + 459.67) * 5/9;
            } else {
                sonuc = sicaklikDeger;
            }
            break;
        case 'kelvin':
            if (hedefBirim === 'celsius') {
                sonuc = sicaklikDeger - 273.15;
            } else if (hedefBirim === 'fahrenheit') {
                sonuc = sicaklikDeger * 9/5 - 459.67;
            } else {
                sonuc = sicaklikDeger;
            }
            break;
        default:
            alert('Geçersiz kaynak birim seçildi.');
            return;
    }

    const resultDiv = document.getElementById('sicaklik-result');
    resultDiv.innerHTML = `
        <h4>Sıcaklık Dönüştürme:</h4>
        <p>${sicaklikDeger}°${kaynakBirim} = ${sonuc}°${hedefBirim}</p>
    `;
    resultDiv.style.display = 'block';
}

function hesaplaUzunluk() {
    const uzunlukDeger = parseFloat(document.getElementById('uzunluk-deger').value);
    const kaynakBirim = document.getElementById('uzunluk-kaynak').value;
    const hedefBirim = document.getElementById('uzunluk-hedef').value;
    
    if (isNaN(uzunlukDeger) || uzunlukDeger < 0) {
        alert('Lütfen geçerli uzunluk değeri giriniz.');
        return;
    }

    let sonuc;
    switch(kaynakBirim) {
        case 'metre':
            if (hedefBirim === 'kilometre') {
                sonuc = uzunlukDeger / 1000;
            } else if (hedefBirim === 'santimetre') {
                sonuc = uzunlukDeger * 100;
            } else if (hedefBirim === 'milimetre') {
                sonuc = uzunlukDeger * 1000;
            } else if (hedefBirim === 'inch') {
                sonuc = uzunlukDeger * 39.3701;
            } else if (hedefBirim === 'feet') {
                sonuc = uzunlukDeger * 3.28084;
            } else {
                sonuc = uzunlukDeger;
            }
            break;
        case 'kilometre':
            if (hedefBirim === 'metre') {
                sonuc = uzunlukDeger * 1000;
            } else if (hedefBirim === 'santimetre') {
                sonuc = uzunlukDeger * 100000;
            } else if (hedefBirim === 'milimetre') {
                sonuc = uzunlukDeger * 1000000;
            } else if (hedefBirim === 'inch') {
                sonuc = uzunlukDeger * 39370.1;
            } else if (hedefBirim === 'feet') {
                sonuc = uzunlukDeger * 3280.84;
            } else {
                sonuc = uzunlukDeger;
            }
            break;
        case 'santimetre':
            if (hedefBirim === 'metre') {
                sonuc = uzunlukDeger / 100;
            } else if (hedefBirim === 'kilometre') {
                sonuc = uzunlukDeger / 100000;
            } else if (hedefBirim === 'milimetre') {
                sonuc = uzunlukDeger / 10;
            } else if (hedefBirim === 'inch') {
                sonuc = uzunlukDeger * 0.393701;
            } else if (hedefBirim === 'feet') {
                sonuc = uzunlukDeger * 0.0328084;
            } else {
                sonuc = uzunlukDeger;
            }
            break;
        case 'milimetre':
            if (hedefBirim === 'metre') {
                sonuc = uzunlukDeger / 1000;
            } else if (hedefBirim === 'kilometre') {
                sonuc = uzunlukDeger / 1000000;
            } else if (hedefBirim === 'santimetre') {
                sonuc = uzunlukDeger / 10;
            } else if (hedefBirim === 'inch') {
                sonuc = uzunlukDeger / 25.4;
            } else if (hedefBirim === 'feet') {
                sonuc = uzunlukDeger / 304.8;
            } else {
                sonuc = uzunlukDeger;
            }
            break;
        case 'inch':
            if (hedefBirim === 'metre') {
                sonuc = uzunlukDeger / 39.3701;
            } else if (hedefBirim === 'kilometre') {
                sonuc = uzunlukDeger / 39370.1;
            } else if (hedefBirim === 'santimetre') {
                sonuc = uzunlukDeger * 2.54;
            } else if (hedefBirim === 'milimetre') {
                sonuc = uzunlukDeger * 25.4;
            } else if (hedefBirim === 'feet') {
                sonuc = uzunlukDeger / 12;
            } else {
                sonuc = uzunlukDeger;
            }
            break;
        case 'feet':
            if (hedefBirim === 'metre') {
                sonuc = uzunlukDeger / 3.28084;
            } else if (hedefBirim === 'kilometre') {
                sonuc = uzunlukDeger / 3280.84;
            } else if (hedefBirim === 'santimetre') {
                sonuc = uzunlukDeger * 30.48;
            } else if (hedefBirim === 'milimetre') {
                sonuc = uzunlukDeger * 304.8;
            } else if (hedefBirim === 'inch') {
                sonuc = uzunlukDeger * 12;
            } else {
                sonuc = uzunlukDeger;
            }
            break;
        default:
            alert('Geçersiz kaynak birim seçildi.');
            return;
    }

    const resultDiv = document.getElementById('uzunluk-result');
    resultDiv.innerHTML = `
        <h4>Uzunluk Dönüştürme:</h4>
        <p>${uzunlukDeger} ${kaynakBirim} = ${sonuc} ${hedefBirim}</p>
    `;
    resultDiv.style.display = 'block';
}

function hesaplaAgirlik() {
    const agirlikDeger = parseFloat(document.getElementById('agirlik-deger').value);
    const kaynakBirim = document.getElementById('agirlik-kaynak').value;
    const hedefBirim = document.getElementById('agirlik-hedef').value;
    
    if (isNaN(agirlikDeger) || agirlikDeger < 0) {
        alert('Lütfen geçerli ağırlık değeri giriniz.');
        return;
    }

    let sonuc;
    switch(kaynakBirim) {
        case 'kilogram':
            if (hedefBirim === 'gram') {
                sonuc = agirlikDeger * 1000;
            } else if (hedefBirim === 'miligram') {
                sonuc = agirlikDeger * 1000000;
            } else if (hedefBirim === 'pound') {
                sonuc = agirlikDeger * 2.20462;
            } else if (hedefBirim === 'ounce') {
                sonuc = agirlikDeger * 35.274;
            } else {
                sonuc = agirlikDeger;
            }
            break;
        case 'gram':
            if (hedefBirim === 'kilogram') {
                sonuc = agirlikDeger / 1000;
            } else if (hedefBirim === 'miligram') {
                sonuc = agirlikDeger * 1000;
            } else if (hedefBirim === 'pound') {
                sonuc = agirlikDeger / 453.592;
            } else if (hedefBirim === 'ounce') {
                sonuc = agirlikDeger / 28.3495;
            } else {
                sonuc = agirlikDeger;
            }
            break;
        case 'miligram':
            if (hedefBirim === 'kilogram') {
                sonuc = agirlikDeger / 1000000;
            } else if (hedefBirim === 'gram') {
                sonuc = agirlikDeger / 1000;
            } else if (hedefBirim === 'pound') {
                sonuc = agirlikDeger / 453592;
            } else if (hedefBirim === 'ounce') {
                sonuc = agirlikDeger / 28349.5;
            } else {
                sonuc = agirlikDeger;
            }
            break;
        case 'pound':
            if (hedefBirim === 'kilogram') {
                sonuc = agirlikDeger / 2.20462;
            } else if (hedefBirim === 'gram') {
                sonuc = agirlikDeger * 453.592;
            } else if (hedefBirim === 'miligram') {
                sonuc = agirlikDeger * 453592;
            } else if (hedefBirim === 'ounce') {
                sonuc = agirlikDeger * 16;
            } else {
                sonuc = agirlikDeger;
            }
            break;
        case 'ounce':
            if (hedefBirim === 'kilogram') {
                sonuc = agirlikDeger / 35.274;
            } else if (hedefBirim === 'gram') {
                sonuc = agirlikDeger * 28.3495;
            } else if (hedefBirim === 'miligram') {
                sonuc = agirlikDeger * 28349.5;
            } else if (hedefBirim === 'pound') {
                sonuc = agirlikDeger / 16;
            } else {
                sonuc = agirlikDeger;
            }
            break;
        default:
            alert('Geçersiz kaynak birim seçildi.');
            return;
    }

    const resultDiv = document.getElementById('agirlik-result');
    resultDiv.innerHTML = `
        <h4>Ağırlık Dönüştürme:</h4>
        <p>${agirlikDeger} ${kaynakBirim} = ${sonuc} ${hedefBirim}</p>
    `;
    resultDiv.style.display = 'block';
}

function hesaplaDijital() {
    const dijitalDeger = parseFloat(document.getElementById('dijital-deger').value);
    const kaynakBirim = document.getElementById('dijital-kaynak').value;
    const hedefBirim = document.getElementById('dijital-hedef').value;
    
    if (isNaN(dijitalDeger) || dijitalDeger < 0) {
        alert('Lütfen geçerli dijital değeri giriniz.');
        return;
    }

    let sonuc;
    switch(kaynakBirim) {
        case 'byte':
            if (hedefBirim === 'kilobyte') {
                sonuc = dijitalDeger / 1024;
            } else if (hedefBirim === 'megabyte') {
                sonuc = dijitalDeger / 1048576;
            } else if (hedefBirim === 'gigabyte') {
                sonuc = dijitalDeger / 1073741824;
            } else if (hedefBirim === 'terabyte') {
                sonuc = dijitalDeger / 1099511627776;
            } else {
                sonuc = dijitalDeger;
            }
            break;
        case 'kilobyte':
            if (hedefBirim === 'byte') {
                sonuc = dijitalDeger * 1024;
            } else if (hedefBirim === 'megabyte') {
                sonuc = dijitalDeger / 1024;
            } else if (hedefBirim === 'gigabyte') {
                sonuc = dijitalDeger / 1048576;
            } else if (hedefBirim === 'terabyte') {
                sonuc = dijitalDeger / 1073741824;
            } else {
                sonuc = dijitalDeger;
            }
            break;
        case 'megabyte':
            if (hedefBirim === 'byte') {
                sonuc = dijitalDeger * 1048576;
            } else if (hedefBirim === 'kilobyte') {
                sonuc = dijitalDeger * 1024;
            } else if (hedefBirim === 'gigabyte') {
                sonuc = dijitalDeger / 1024;
            } else if (hedefBirim === 'terabyte') {
                sonuc = dijitalDeger / 1048576;
            } else {
                sonuc = dijitalDeger;
            }
            break;
        case 'gigabyte':
            if (hedefBirim === 'byte') {
                sonuc = dijitalDeger * 1073741824;
            } else if (hedefBirim === 'kilobyte') {
                sonuc = dijitalDeger * 1048576;
            } else if (hedefBirim === 'megabyte') {
                sonuc = dijitalDeger * 1024;
            } else if (hedefBirim === 'terabyte') {
                sonuc = dijitalDeger / 1024;
            } else {
                sonuc = dijitalDeger;
            }
            break;
        case 'terabyte':
            if (hedefBirim === 'byte') {
                sonuc = dijitalDeger * 1099511627776;
            } else if (hedefBirim === 'kilobyte') {
                sonuc = dijitalDeger * 1073741824;
            } else if (hedefBirim === 'megabyte') {
                sonuc = dijitalDeger * 1048576;
            } else if (hedefBirim === 'gigabyte') {
                sonuc = dijitalDeger * 1024;
            } else {
                sonuc = dijitalDeger;
            }
            break;
        default:
            alert('Geçersiz kaynak birim seçildi.');
            return;
    }

    const resultDiv = document.getElementById('dijital-result');
    resultDiv.innerHTML = `
        <h4>Dijital Birim Dönüştürme:</h4>
        <p>${dijitalDeger} ${kaynakBirim} = ${sonuc} ${hedefBirim}</p>
    `;
    resultDiv.style.display = 'block';
}

// Sonuç gösterme fonksiyonu
function gosterSonuc(elementId, sonuc) {
    const sonucElement = document.getElementById(elementId);
    sonucElement.innerHTML = sonuc;
    sonucElement.style.display = 'block';
}
