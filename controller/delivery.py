import nselib
from nselib import capital_market
import sys
print()
# symbol = 'HDFCBANK'
def bulk():
    p = capital_market.price_volume_and_deliverable_position_data(sys.argv[1], period='1M')
    g = p.values.tolist()
    print(g);
bulk()