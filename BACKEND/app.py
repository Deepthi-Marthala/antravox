import os
from flask import Flask, request, render_template, redirect, url_for
import psycopg2

# ================= APP CONFIG =================

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_DIR = os.path.join(BASE_DIR, "FRONTEND")




app = Flask(
    __name__,
    template_folder=os.path.join(FRONTEND_DIR, "TEMPLATES"),
    static_folder=os.path.join(FRONTEND_DIR, "STATIC")
)

# ================= ROUTES =================

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/careers')
def careers():
    return render_template('careers.html')


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/apply')
def apply():
    role = request.args.get('role')
    return render_template('apply.html', role=role)


@app.route('/success')
def success():
    return render_template('success.html')


@app.route('/ivr')
def ivr():
    return render_template('products/ivr.html')


@app.route('/messaging')
def messaging():
    return render_template('products/messaging.html')


@app.route('/sip')
def sip():
    return render_template('products/sip.html')


@app.route('/voip')
def voip():
    return render_template('products/voip.html')


@app.route('/aiivr')
def ai_ivr():
    return render_template('products/AI-ivr.html')


@app.route('/aiagent')
def ai_agent():
    return render_template('products/AI-agent.html')


@app.route('/developer')
def developer():
    return render_template('careers/developer.html')


@app.route('/marketing')
def marketing():
    return render_template('careers/marketing.html')


@app.route('/internship')
def internship():
    return render_template('careers/internship.html')


# ================= DATABASE CONNECTION =================

try:
    conn = psycopg2.connect(
        host="localhost",
        database="login access",
        user="postgres",
        password="Deepu@123",
        port="5432"
    )
    print("✅ Database connected successfully")
except Exception as e:
    print("❌ Database connection failed:", e)


# ================= FORM SUBMISSIONS =================

@app.route('/submit', methods=['POST'])
def submit():
    try:
        cursor = conn.cursor()

        cursor.execute("""
            INSERT INTO applications
            (Student_Name, Student_Email, Student_Qualification, Student_Role,
             Student_Gender, Student_College_University, Student_Branch)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """, (
            request.form.get('Student_Name'),
            request.form.get('Student_Email'),
            request.form.get('Student_Qualification'),
            request.form.get('Student_Role'),
            request.form.get('Student_Gender'),
            request.form.get('Student_College_University'),
            request.form.get('Student_Branch')
        ))

        conn.commit()
        cursor.close()
        return redirect(url_for('success'))

    except Exception as e:
        conn.rollback()
        return f"Database Error: {str(e)}"


@app.route('/submit-get-started', methods=['POST'])
def submit_get_started():
    try:
        cursor = conn.cursor()

        cursor.execute(
            "INSERT INTO get_started_requests (name, email) VALUES (%s, %s)",
            (request.form.get('name'), request.form.get('email'))
        )

        conn.commit()
        cursor.close()
        return render_template("success.html")

    except Exception as e:
        conn.rollback()
        return f"Database Error: {str(e)}"


@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    try:
        cursor = conn.cursor()

        cursor.execute("""
            INSERT INTO contact_messages (full_name, email, service, message)
            VALUES (%s, %s, %s, %s)
        """, (
            request.form.get('full_name'),
            request.form.get('email'),
            request.form.get('service'),
            request.form.get('message')
        ))

        conn.commit()
        cursor.close()
        return render_template("success.html")

    except Exception as e:
        conn.rollback()
        return f"Database Error: {str(e)}"


# ================= RUN APP =================

if __name__ == '__main__':
    app.run(debug=True)
