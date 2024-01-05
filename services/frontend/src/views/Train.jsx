export default function Train() {
    const data = 
    {
      "head": [
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;8;5;2;1;1;1;13;10;6;10;1;0;0;1;1;0;20;0;0;0;0;0;0.0;0;0;0;0;0;0.0;0;10.8;1.4;1.74;Dropout"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;6;1;11;1;1;1;1;3;4;4;1;0;0;0;1;0;19;0;0;6;6;6;14.0;0;0;6;6;6;13.666666666666666;0;13.9;-0.3;0.79;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;5;5;1;1;1;22;27;10;10;1;0;0;0;1;0;19;0;0;6;0;0;0.0;0;0;6;0;0;0.0;0;10.8;1.4;1.74;Dropout"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;8;2;15;1;1;1;23;27;6;4;1;0;0;1;0;0;20;0;0;6;8;6;13.428571428571429;0;0;6;10;5;12.4;0;9.4;-0.8;-3.12;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "2;12;1;3;0;1;1;22;28;10;10;0;0;0;1;0;0;45;0;0;6;9;5;12.333333333333334;0;0;6;6;6;13.0;0;13.9;-0.3;0.79;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "2;12;1;17;0;12;1;22;27;10;8;0;0;1;1;1;0;50;0;0;5;10;5;11.857142857142858;0;0;5;17;5;11.5;5;16.2;0.3;-0.92;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;1;12;1;1;1;13;28;8;11;1;0;0;1;0;1;18;0;0;7;9;7;13.3;0;0;8;8;8;14.345;0;15.5;2.8;-4.06;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;9;4;11;1;1;1;22;27;10;10;1;0;0;0;1;0;22;0;0;5;5;0;0.0;0;0;5;5;0;0.0;0;15.5;2.8;-4.06;Dropout"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;3;10;1;1;15;1;1;10;10;0;0;0;1;0;1;21;1;0;6;8;6;13.875;0;0;6;7;6;14.142857142857142;0;16.2;0.3;-0.92;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;1;10;1;1;1;1;14;5;8;1;0;1;0;0;0;18;0;0;6;9;5;11.4;0;0;6;14;2;13.5;0;8.9;1.4;3.51;Dropout"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;1;14;1;1;1;23;14;6;8;1;0;0;1;0;0;18;0;0;6;6;6;12.333333333333334;0;0;6;7;5;14.2;0;13.9;-0.3;0.79;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;1;12;1;1;1;13;28;10;10;1;0;0;1;0;1;18;0;0;8;8;7;13.214285714285714;0;0;8;8;7;13.214285714285714;0;12.7;3.7;-1.7;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;2;16;1;1;1;13;27;5;10;1;0;0;1;0;0;19;0;0;6;6;0;0.0;0;0;6;0;0;0.0;0;12.7;3.7;-1.7;Dropout"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;17;1;11;1;16;1;1;1;5;8;1;0;0;1;0;1;21;0;0;6;7;6;10.571428571428571;0;0;6;8;5;11.0;0;8.9;1.4;3.51;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;1;6;1;1;1;23;27;6;6;1;0;0;1;0;1;18;0;0;5;7;4;13.25;0;0;5;5;5;12.0;0;10.8;1.4;1.74;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;1;15;1;1;1;13;27;10;4;1;0;0;1;0;0;20;0;0;6;6;5;13.2;0;0;6;7;0;0.0;0;15.5;2.8;-4.06;Dropout"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;9;1;10;1;1;1;13;28;6;9;1;0;0;1;0;0;18;0;0;6;10;1;12.0;0;0;6;14;2;11.0;0;10.8;1.4;1.74;Enrolled"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;8;2;12;1;1;1;13;1;6;5;1;0;0;1;0;0;18;0;0;7;8;7;13.30625;0;0;8;8;8;14.545;0;15.5;2.8;-4.06;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;1;8;1;1;1;3;14;4;6;1;0;0;1;0;0;20;0;0;5;8;4;12.5;1;0;5;8;4;12.25;2;10.8;1.4;1.74;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;1;16;1;1;1;13;14;8;8;1;0;0;1;0;0;18;0;0;7;7;6;11.666666666666666;0;0;7;8;6;13.5;0;16.2;0.3;-0.92;Enrolled"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;3;2;1;1;1;1;1;10;9;0;0;0;1;0;1;21;0;0;0;0;0;0.0;0;0;0;0;0;0.0;0;11.1;0.6;2.02;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;9;4;13;1;1;1;1;28;5;8;1;0;0;1;0;0;20;0;0;7;14;7;11.4375;0;0;8;9;8;11.425;0;12.7;3.7;-1.7;Enrolled"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;4;12;1;1;1;13;14;2;2;1;0;0;1;0;0;18;0;0;8;12;7;12.857142857142858;0;0;8;12;7;12.857142857142858;0;12.7;3.7;-1.7;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;4;14;1;1;1;1;28;5;8;1;0;0;1;0;1;19;0;0;6;8;6;13.375;0;0;6;7;6;12.285714285714286;0;11.1;0.6;2.02;Graduate"
        },
        {
          "Marital status;Application mode;Application order;Course;evening attendance;Previous qualification;Nacionality;Mother's qualification;Father's qualification;Mother's occupation;Father's occupation;Displaced;Educational special needs;Debtor;Tuition fees up to date;Gender;Scholarship holder;Age at enrollment;International;Curricular units 1st sem (credited);Curricular units 1st sem (enrolled);Curricular units 1st sem (evaluations);Curricular units 1st sem (approved);Curricular units 1st sem (grade);Curricular units 1st sem (without evaluations);Curricular units 2nd sem (credited);Curricular units 2nd sem (enrolled);Curricular units 2nd sem (evaluations);Curricular units 2nd sem (approved);Curricular units 2nd sem (grade);Curricular units 2nd sem (without evaluations);Unemployment rate;Inflation rate;GDP;Output": "1;1;1;12;1;1;1;13;14;4;8;0;0;0;1;0;0;19;0;0;7;8;6;13.296666666666669;0;0;8;9;7;14.114285714285714;0;11.1;0.6;2.02;Graduate"
        }
      ]
    }
    const mapKaggleColumnsName = data.head;
    const columnsName = Object.keys(mapKaggleColumnsName[0])[0].split(';');
    const dataColumnData = mapKaggleColumnsName.map((item) => Object.values(item));
    
    
    return(
        <>
            <div className="max-w-screen-xl mx-auto pt-20">
            <div>
                <h2>Backend Data Scraping</h2>
                <p>Ten mikroserwis skupia się na udostępnienu możliwości wybrania przez użytkownika dowolnego zbioru danych pod swój model uczenia maszynowego, oczywiście o ile ten dataset znajduje się w serwisie Kaggle. Zdecydowaliśmy się na kożystanie z API kaggle ponieważ w łatwy i przystępny sposób mamy dostęp do dużej ilości zbiorów danych do daje wiele możliwości naszemu użytkownikowi.</p>
                <p></p>
                <ul>
                    <li><code>/show_available_datasets</code> - pozwala na zwrócenie listy dostępnych zbiorów danych z podanego tematu</li>
                    <li><code>/show_dataframe</code> - pozwala na wyświetlenie wybranego zbioru danych</li>
                    <li><code>/selected_columns_of_dataframe</code> - pozwala wyciąć z wybranego zbioru danych nie interesujące nas kolumny</li>
                    <li><code>/send_dataset_to_ml</code> - pozwala na wysłanie obrobionego zbioru danych do mikroserwiku uczenia maszynowego</li>
                    <li><code>/storage</code> - pozwala na wyświetlenie storage'u danego użytkownika</li>
                </ul>
            </div>
            
            
            </div>
        </>
    )
}