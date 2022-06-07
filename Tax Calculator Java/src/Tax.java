import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Tax {
    private JTextField textCTC;
    private JTextField textRate1;
    private JTextField textTotalTax;
    private JButton calculateButton;
    private JPanel Main;
    private JTextField textCode;
    private JTextField textRate2;

    public static void main(String[] args) {
        JFrame frame = new JFrame("Tax");
        frame.setContentPane(new Tax().Main);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setVisible(true);
    }

    public Tax() {
        calculateButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                double income;
                double code; //Country Code

                double total =0;

                income = Integer.parseInt(textCTC.getText());
                code = Integer.parseInt(textCode.getText());
                if(code == 91) //India
                {
                    double Rate1In = 0.05; //5%
                    double Rate2In = 0.20; //20%
                    double Rate3In = 0.30; //30%
                    if( income < 250000){
                        total = 0;
                    } else if (income >= 250000 && income <= 500000) {
                        total = Rate1In * ( income - 250000);
                    } else if (income >= 500000 && income <= 1000000) {
                        total = 25000 + (Rate2In * ( income - 500000));
                    }  else if (income > 1000000) {
                        total = 112500 + (Rate3In * (income - 1000000));
                    }
                } else if (code == 1 ) { //USA
                    double Rate1Usa = 0.1; //10%
                    double Rate2Usa = 0.12; //12%
                    double Rate3Usa= 0.22; //22%
                    double Rate4Usa= 0.24; //22%
                    double Rate5Usa= 0.32; //22%
                    double Rate6Usa= 0.35; //22%
                    double Rate7Usa= 0.37; //22%
                    if( income <  10275){
                        total = Rate1Usa * income;
                    } else if (income >= 10276 && income <= 417775) {
                        total = Rate2Usa * income;
                    } else if (income >= 417776 && income <= 89075) {
                        total = Rate3Usa * income;
                    }  else if (income > 89076 && income <= 170050) {
                        total = Rate4Usa * income;
                    } else if (income > 170051 && income <= 215950) {
                        total = Rate5Usa * income;
                    } else if (income > 215951 && income <= 539900) {
                        total = Rate6Usa * income;
                    } else if (income > 539901 ) {
                        total = Rate7Usa * income;
                    }
                }
                textTotalTax.setText(String.valueOf(total));
            }
        });
    }
}
